import './style.css'
import javascriptLogo from './assets/javascript.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { setupCounter } from './counter.js'

import './style.css'
import { add } from '../math.js'

document.querySelector('#app').innerHTML = `
  <div class="container">
    <h1>Min DevOps-app</h1>
    <p>En enkel app byggd med Vite och testad med Vitest.</p>

    <div class="card">
      <h2>Exempelberäkning</h2>
      <p>2 + 3 = <strong>${add(2, 3)}</strong></p>
    </div>
  </div>
`

setupCounter(document.querySelector('#counter'))
