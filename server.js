

const http = require("http")
const server = http.createServer((req, res) => {
    res.statusCode=404
    res.write('welcome\n')
    res.write('welcome papa')
       res.end()      
})
    
server.listen(3000, () => {console.log('server running')})