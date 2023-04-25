const http = require('http')

const server = http.createServer((req,res) => {
    if(req.url === '/'){
      res.write('Welcome to out home page')
    }
    if(req.url === '/about'){
      res.end('Here is our short history')
    }
    res.end(`
        <h1>Oops!</h1>
        <p>We cant't seem to find the page uoy are looking for</p>
        <a href="/">back home</a>
    `)
})

server.listen(5000)