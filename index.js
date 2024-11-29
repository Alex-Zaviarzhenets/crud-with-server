const http = require('http')
const serveFile = require('./serve-files.js')
const handleApi = require('./api.js')
const server = http.createServer(handleRequest)

server.listen(3003, console.log('http://127.0.0.1:3003/'))

function handleRequest(request, response){
  if (isEndPoint(request.method, request.url)){
    handleApi(request, response)
  } else {
    serveFile(request, response)
  } 
}

function isEndPoint(method, url) {
  const apiEndpoints = ['POST/user', 'GET/users', 'DELETE/user'];
  return apiEndpoints.includes(`${method}${url}`)
}
