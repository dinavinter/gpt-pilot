import './style.css';
import typescriptLogo from './typescript.svg';
import viteLogo from '/vite.svg';
 import {
 setupGigyaProfileContainer,
 setupJwtContainer,
 setupProperties,
 setupLoginContainer, setupNavBar,
} from '@gigya';
import { gigyaService, GigyaState } from '@gigya/service';
 
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div> 
  <header class="header">
      <div id="navbar" ></div>  

   </header> 

   <section class="container">
       <a href="https://vitejs.dev" target="_blank">
        <img src="${viteLogo}" class="logo" alt="Vite logo" />
      </a>
      <a href="https://www.typescriptlang.org/" target="_blank">
        <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
      </a>
      <h1>Gigya + Vite + TS</h1>
    </section>
    <div class="hcontainer">
       <section class="container left" id="properties"></section>
       <div class="vcontainer container center">
             <section class="section container" id="not-authenticated">  </section> 
             <section class="section container" id="profile"> </section> 
             <section class="container" id="jwt"></section>  
       </div>

    </div>
  </div>
`;

setupNavBar(document.querySelector<HTMLDivElement>('#navbar')!);
setupLoginContainer(
  document.querySelector<HTMLDivElement>('#not-authenticated')!
);


setupGigyaProfileContainer(
  document.querySelector<HTMLDivElement>('#profile')!
);

setupJwtContainer(
    document.querySelector<HTMLDivElement>('#jwt')!

)
 
setupProperties(document.querySelector<HTMLDivElement>('#properties')!);
 
gigyaService.subscribe((state: GigyaState) => {
  console.log(state);
});
