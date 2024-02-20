import {  AuthEvent, gigyaService} from "@gigya";

  

export function setupNavBar(element: HTMLDivElement) {


    const navActions = ['login', 'logout', 'register'] as Array<AuthEvent['type']>;

    element.innerHTML = `
              ${navActions.map((a: AuthEvent["type"]) => ` 
                   <button  
                   class="button-clear"
                   id="${a}"
                   >
                    ${a}
                    </button>`)
        .join('')}
        `; 
    for (const button of element.getElementsByTagName('button')) {
        {
            button.addEventListener('click', () => {
                gigyaService.send(button.id as AuthEvent["type"]);
            });
        }
    }
}
