const dotenv = require('dotenv')
const http = require('http')

dotenv.config()

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World')
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})

process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Process terminated')
  })
})

console.log(process.env)

setTimeout(() => process.kill(process.pid, 'SIGTERM'), 1000)
