const fs = require('fs')

module.exports = function serveFile(request, response){
  const html = fs.readFileSync('public/index.html')
  response.end(html)
}
