import './style.css'
import { add, subtract, multiply, divide } from '../math.js'

document.querySelector('#app').innerHTML = `
  <div class="container">
    <h1>Min DevOps-app</h1>

    <input id="num1" type="number" placeholder="Tal 1" />
    <input id="num2" type="number" placeholder="Tal 2" />

    <div>
      <button id="add">+</button>
      <button id="sub">-</button>
      <button id="mul">*</button>
      <button id="div">/</button>
    </div>

    <div class="card">
      <p id="result"></p>
    </div>
  </div>
`

const getNumbers = () => {
  const a = Number(document.querySelector('#num1').value)
  const b = Number(document.querySelector('#num2').value)
  return { a, b }
}

document.querySelector('#add').onclick = () => {
  const { a, b } = getNumbers()
  document.querySelector('#result').textContent = `Resultat: ${add(a, b)}`
}

document.querySelector('#sub').onclick = () => {
  const { a, b } = getNumbers()
  document.querySelector('#result').textContent = `Resultat: ${subtract(a, b)}`
}

document.querySelector('#mul').onclick = () => {
  const { a, b } = getNumbers()
  document.querySelector('#result').textContent = `Resultat: ${multiply(a, b)}`
}

document.querySelector('#div').onclick = () => {
  const { a, b } = getNumbers()
  document.querySelector('#result').textContent = `Resultat: ${divide(a, b)}`
}

