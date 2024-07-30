import './style.css'
import filmLogo from '/film.svg'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import './app.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="#" title="Faisons des recherches sur les films !! ">
      <img src="${filmLogo}" class="logo film" alt="Vite logo" />
    </a>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Filmorama</h1>
    <form id="form" class="card">
      <label for="search">Recherchez un film</label>
      <fieldset>
        <input type="text" id="search" name="search" ></input>
        <input type="submit" value="Recherchez"></input>
      </fieldset>
    </form>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
  <div>
    <h2>Mes résultats</h2>
    <p id="resultDisplay">
    </p>
  </div>
`
