import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import * as log from "https://deno.land/std@0.202.0/log/mod.ts";

log.setup({
    handlers: {
        console: new log.handlers.ConsoleHandler("DEBUG"),
    },

    loggers: {
        "notify-login": {
            level: "DEBUG",
            handlers: ["console"],
        },
    },
});

function logger() {
    return log.getLogger("notify-login");
}

const app = new Application();
const router = new Router();

router.post("/login", async (context) => {
    const body = await context.request.body({ type: 'form-data' });
    const { username, client_context } = (await body.value.read()).fields;


    const res = await fetch(`https://accounts.${Deno.env.get("GIGYA_DOMAIN")}/accounts.notifyLogin`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
            siteUID: username,
            apiKey: Deno.env.get("GIGYA_API_KEY"),
            userKey: Deno.env.get("GIGYA_APP_KEY"),
            secret: Deno.env.get("GIGYA_APP_SECRET"),
            skipValidation: true
            
        })
    });

    logger().info(res.headers);

    const data = await res.json();
    logger().info(data);

    const sessionInfo = data.sessionInfo || data;
    context.cookies.set(sessionInfo.cookieName, sessionInfo.cookieValue, { httpOnly: false });
    context.response.headers.set('x-response', JSON.stringify(data));
    context.response.redirect('/');
});

router.get("/", (context) => {
    const apiKey = Deno.env.get("GIGYA_API_KEY");

    const html = `
  <html lang="en">
    <head>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.2/jquery.js"></script>
    </head>
    <body>
      <form action="/login" method="post" enctype="multipart/form-data">
        <input name="username" placeholder="username" />
        <input name="client_context" placeholder="client context" type="checkbox" />

        <button type="submit">Login</button>
      </form>

      <button onClick="gigya.hasSession()">Call gigya.hasSession() </button>
 
      <script src="https://cdns.${Deno.env.get('GIGYA_DOMAIN')}/js/gigya.js?apikey=${apiKey}" async   ></script> 
      <script>
        function logEvent(message) {
          console.log(message);
         }

      var onGigyaServiceReady =  function (){
          logEvent('Gigya Service is ready.');
          gigya.showDebugUI(); 
          gigya.socialize.addEventHandlers({
            onLogin: function(e) {
              logEvent('User logged in.');
             },
            onLogout: function(e) {
              logEvent('User logged out.');
             }
          });
        }  
      </script>
    </body>
  </html>`;

    context.response.body = html;
});

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });
