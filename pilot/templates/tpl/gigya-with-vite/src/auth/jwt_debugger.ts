import type {  Jwt } from '@auth/jwt';

export function dumpJwt({ id_token }: { id_token: Jwt }) {
  return (
    (id_token &&
      ` <div class="vcontainer" >
    ${claims(id_token)}
    ${raw(id_token)}
    </div>`) ||
    `no data`
  );
}

 


function raw({ raw }: Jwt) {
  return ` <div>
  <p><b>Your raw token is:</b>
  <blockquote><em id="raw-token">${raw}</em></blockquote></p>
 <p>You can debug it at <b><a href="https://jwt.io?#debugger-io?token=${raw}">jwt.io</a></b> or <b><a href="https://jwt.ms/#id_token=${raw}">jwt.ms</a></b>.</p>
 <div>`;
}

function flatten(claims: [string, any][]): [string, any][]{
  return  claims.flatMap(([key, value]) => {
    if (typeof value === 'object') {
      return flatten(Object.entries(value).map(([k, v]) => [`${key}.${k}`, v]));
    }
    return [ [key, value]]
  })
}

function claims({ claims }: Jwt) {
  return ` 
  <div>
   <p class="row float-left"><b>Here is your JWT token payload:</b></p>
  <table id="token-table">
  <thead>
    <tr>
      <th>Key</th>
      <th>Value</th>
    </tr> 
  </thead>
  <tbody>
    ${flatten(Object.entries(claims))
      .map(
          ([key,value]) => `<tr>
    <td>${key}</td>
    <td>${value}</td>
  </tr>`
      )
      .join(' ')}
  </tbody>
  </table>
  </div>
  `;
}
