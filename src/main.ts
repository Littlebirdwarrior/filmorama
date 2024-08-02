import './style.css'
import filmLogo from '/film.svg'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import './app.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="container-search">
    <div class="logos">
      <a href="#" title="Faisons des recherches sur les films !! ">
        <img src="${filmLogo}" class="logo film" alt="Vite logo" />
      </a>
      <a href="https://vitejs.dev" target="_blank">
        <img src="${viteLogo}" class="logo" alt="Vite logo" />
      </a>
      <a href="https://www.typescriptlang.org/" target="_blank">
        <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
      </a>
    </div>
    <h1>Filmorama</h1>
    <form id="form" class="card">
      <label for="search">Recherchez un film</label>
      <fieldset>
        <input type="text" id="search" name="search" ></input>
        <input type="submit" value="Recherchez"></input>
      </fieldset>
    </form>
  </div>
  <div class="container-result">
    <h2 class="text-center">Mes résultats</h2>
    <div id="resultDisplay" class="movies-container">
    </div>
  </div>
`
