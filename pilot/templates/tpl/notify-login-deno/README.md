> source https://dash.deno.com/playground/gigya-notify-login
> demo https://gigya-notify-login.deno.dev
# GIGYA Notify Login
## Deno Example

Use notifyLogin when you do the authentication yourself and want to notify Gigya about the login and create a session for the user.

### Usage

##const res = await fetch(`https://accounts.${Deno.env.get("GIGYA_DOMAIN")}/accounts.notifyLogin`, {
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

First, execute notifyLogin to notify Gigya about the login and create a session for the user.

```http request
POST /notifyLogin
Content-Type: application/x-www-form-urlencoded

siteUID=${username}&apiKey=${apikey}&userKey=${app_key}&secret=${app_secret}&skipValidation=true

```

This will result with an auth code that you can use to inject into the html page to intiate the login process.

```ts
    const data = await res.json();
    context.cookies.set(data.sessionInfo.cookieName, sessionInfo.cookieValue, { httpOnly: false });
    context.response.redirect('/');
```