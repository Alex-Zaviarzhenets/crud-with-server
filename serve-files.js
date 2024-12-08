const fs = require('fs')

module.exports = function serveFile(request, response){
  if (request.url === '/script.js') {
    const script = fs.readFileSync('public/script.js')
    response.end(script)
    
  } else if (request.url === '/style.css') {
    const style = fs.readFileSync('public/style.css')
    response.end(style)
  } else {
    const html = fs.readFileSync('public/index.html')
    response.end(html)
  }
}
