import {gigyaService, type GigyaState} from "@gigya/service.ts";

export function setupLoginButton(button: HTMLButtonElement) {
     button.onclick = () => {
         gigyaService.send('login');
     }
     gigyaService.subscribe((state: GigyaState) => {
         button.style.display = state.matches('authenticated') ? 'none' : 'inline';
     })
     
}
