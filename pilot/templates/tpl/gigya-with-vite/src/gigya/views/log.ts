import {GigyaState, gigyaService, AuthContext} from "@gigya";




export function setupProperties(element: HTMLDivElement) {
    element.innerHTML = `
 <div class="wrap-collabsible">
    <input id="collapsible" class="toggle" type="checkbox">
    <label for="collapsible" class="lbl-toggle">Logger</label>
      <div class="collapsible-content">
       <div class="content-inner" />
    </div>
    </div>
  `;

    setupContent(element.querySelector('.content-inner') as HTMLDivElement);
      function setupContent(element: HTMLDivElement) {
        let elements = [] as GigyaState[];

        gigyaService.subscribe((state) => {
            elements.push(state);

            element.innerHTML = `
              <p></p>
              <table>
                <thead>
                  <tr>
                    <th>State</th> 
                    <th>Context</th>
                  </tr>
                </thead>
                <tbody>
                ${elements.map(logState).join('')}
                </tbody>
              </table>`;
        });

    }
}

function logState({value, context}: { value: string, context: AuthContext }) {
    return `<tr>
        <td>${value}</td>
          ${drawContext()} 
      </tr>
      `;

    function drawContext() {
        return Object.keys(context || {}).filter(k => context[k as keyof AuthContext]).map((key) => {
            return `<tr>
            <td>--</td>
            <td>${key}</td>
            </tr>`
        }).join('');
    }
}
