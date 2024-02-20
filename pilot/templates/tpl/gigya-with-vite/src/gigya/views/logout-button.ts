import {gigyaService} from "@gigya/service.ts";
 
export function setupLogoutButton(button: HTMLButtonElement) {
    button.onclick = () => {
        gigyaService.send('logout');
    } 
}
