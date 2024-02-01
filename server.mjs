import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {

  console.log(`this is working in my machine  listening on port ${port}`)

  console.log("step to follow 1. npm init 2. npm i express 3.hello world from expressjs 4.go to package.json and write scripts  : node file name and save also 5. go to terminal and run command npm start")
})