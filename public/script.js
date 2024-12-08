
const [button] = document.body.getElementsByTagName('button');
const [input] = document.body.getElementsByTagName('input')
const [ul] = document.body.getElementsByTagName('ul')

button.onclick = (e) => {
  e.preventDefault()
  fetch('/user', {
    method: 'POST',
    body: input.value
  })
  
  ul.innerHTML += `<li>${input.value} <button> &times; </button> </li>`
}

fetch('/users').then((response) => response.json()).then(users => {
  ul.innerHTML = users
    .map(user => `<li>${user} <button> &times; </button> </li>`).join('')
    
})
