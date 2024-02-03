import express from 'express'
 import cors from 'cors'
const app = express();
 app.use(cors());
app.use(express.json()); // data in encrepted form
 const port = process.env.PORT || 3000; // hame nhi pata heroku par kon se port hai ya nhi abhi 


 let users  =[];


// app.get('/home', (req, res) => {
//   res.send('Hello  i am home page  i am using the postman      i have not written the frontend !  my localhost adderess is   http://localhost:3000/')
// })
// app.get('/users', (req, res) => {
//   res.send('Hello  i am home page  i am using the postman      i have not written the frontend !')
// })
app.put('/users', (req, res) => {
  res.send('your user is modified on 3 feb 2024')
})
app.get('/user', (req, res) => {
  res.send(users);
})
app.post('/user', (req, res) => {

  users.push(req.body);
  console.log(req.body);
  res.send('your user is created on 3 feb 2024')
})
app.delete('/users', (req, res) => {
  res.send('your user is deleted on 3 feb 2024')
})

app.get('/profile', (req, res) => {
  res.send(' i am profile page!')
})
app.post('/cv', (req, res) => {
  res.send({   // cv should be created in frontend part
    name:"vinod singh",
    class:"web and mobile dev",
    hard:"ideal in the  work of doning",
    mentor:"inzmam and ghous ahmed"
  })
  
})

app.listen(port, () => {

  console.log(`this is working in my machine  listening on port ${port}`)

  console.log("step to follow 1. npm init 2. npm i express 3.hello world from expressjs 4.go to package.json and write scripts  : node file name and save also 5. go to terminal and run command npm start")
})


 // https://api.weatherapi.com/v1/current.json?key=5691b4e0336445c7952191514241901&q=bihar&aqi=no   
  // api weather to call weather condition 
