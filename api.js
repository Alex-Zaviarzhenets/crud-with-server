const users = []

module.exports = function handleApi(request, response) {
  // if (request.method === 'POST' && request.url === '/user') {

  // } else if (request.method === 'GET' && request.url === '/users') {

  // } else if (request.method === 'DELETE' && request.url === '/user') {

  // }

  const endPoint = request.method + request.url
  switch (endPoint) {
    case 'POST/user':
      request.addListener('data', (buffer) => {
        users.push(String(buffer))
        console.log(users)
        response.end()
      })
      break;

    case 'GET/users':
      response.end(JSON.stringify(users))
      break;

    case 'DELETE/user':
      request.addListener('data', (buffer) => {
        const index = String(buffer)
        users.splice(index)
        response.end()
      })
      break;

    default:
      break;
  }
}
