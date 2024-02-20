import {gigyaService, type GigyaState} from "@gigya";

export function showWhenAuthenticated(element: HTMLElement) {
     gigyaService.subscribe((state: GigyaState) => {
        element.style.display = state.matches('authenticated') ? 'none' : 'inline';
    }) 
}

export function showWhenUnauthenticated(element: HTMLElement) {
    gigyaService.subscribe((state: GigyaState) => {
        element.style.display = state.matches('authenticated') ? 'none': 'inline' ;
    })
}
