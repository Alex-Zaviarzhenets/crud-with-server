
const [button] = document.body.getElementsByTagName('button');
const [input] = document.body.getElementsByTagName('input')
const [ul] = document.body.getElementsByTagName('ul')

button.onclick = (e) => {
  e.preventDefault()
  fetch('/user', {
    method: 'POST',
    body: input.value
  })

  ul.insertAdjacentHTML('beforeend', `<li>${input.value} <button> &times; </button></li>`) 
  const button = ul.lastChild.lastChild
  button.onclick = () => {
    const index = Array.from(ul.children).indexOf(button.parentElement)
    fetch('user', {
      method: 'DELETE', 
      body: String(index)
    })
    button.parentElement.remove()
  }
}

fetch('/users').then((response) => response.json()).then(users => {
  ul.innerHTML = users
    .map(user => `<li>${user} <button> &times; </button></li>`).join('')
  for (let i = 0; i < ul.children.length; i++) {
    const button = ul.children[i].lastChild
    button.onclick = () => {
      const index = Array.from(ul.children).indexOf(button.parentElement)
      fetch('user', {
        method: 'DELETE', 
        body: String(index)
      })
      button.parentElement.remove()
    }
  }
})
