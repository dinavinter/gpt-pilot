import {dumpJwt} from "@auth/jwt_debugger.ts";
import {gigyaService} from "@gigya/service.ts";

export function setupJwtContainer(element: HTMLDivElement) {
    gigyaService.subscribe(( {matches, context:{id_token}}) => {
        element.style.display = matches('authenticated') ? 'inline' : 'none';
        if (matches('authenticated') && id_token) {
            console.log(id_token.claims);
            element.innerHTML = dumpJwt({id_token: id_token!});
        }
    })
}
