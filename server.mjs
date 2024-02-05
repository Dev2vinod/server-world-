import express from 'express'
 import cors from 'cors'
  const app = express();
 app.use(cors());
  app.use(express.json()); // data in encrepted form
 const port = process.env.PORT || 3000; // hame nhi pata heroku par kon se port hai ya nhi abhi 


 let users  =[];// later replace with monogodb 

 // generate idd

 function randomNumber(){
  return Math.floor(Math.random()*1000000000);
 }



app.get('/user/:userId', (req, res) => {

  let userId =req.params.userId;
  let isFound =false;

   for(let i =0;i<users.length;i++){

    if(users[i].id ==userId){
      res.send(users[i]);
      isFound =true;
      break;
    }

    if(!isFound){
      res.send("user is not found")
    }


   }
 


  res.send(users);
  console.log("single user ")
})
app.get('/users', (req, res) => { // for a multiple user
  res.send(users);
  console.log("for a mulitiple user ")
})

 app.put('/user/:userId', (req, res) => {
 
  let userId =req.params.userId;
  let userIndex =-1 ;
 
  for(let i =0;i<users.length;i++){

    if(users[i].id ==userId){
      res.send(users[i]);
      userIndex =i;
      
      break;
    }
    if(userIndex ===-1){
      res.send("user not found");

    }else{
      if(req.body.fullname){
        users[userIndex].fullname =req.body.fullname
      };
      if(req.body.username){
        users[userIndex].username =req.body.username
      };
      if(req.body.password){
        users[userIndex].password =req.body.password
      };

      res.send(users[userIndex]);
    }



  res.send('your user is modified on 4  feb 2024*******  a single user')
}})
 app.put('/users', (req, res) => {
  res.send('your user is modified on 4 feb 2024 **** for multiple user')
})
app.post('/user', (req, res) => {

  let newUser ={
    id:randomNumber(),
    fullname:req.body.fullname,
    username:req.body.username,
    password:req.body.password,
    message:"i am message from  server site  i have post method in line number 93"
  }
  users.push(newUser);
  console.log(newUser);
  res.send('your user is created on 4 feb 2024')
})
app.delete('/user/:userId', (req, res) => {

  let userId =req.params.userId;
  let userIndex =-1 ;
 
  for(let i =0;i<users.length;i++){

    if(users[i].id ==userId){
      res.send(users[i]);
      userIndex =i;
      
      break;
    }
    if(userIndex ===-1){
      res.send("user is not found");

    }else{
      delete users[userIndex];
    }


  res.send('your user is deleted on 3 feb 2024 **** single user')
}})
app.delete('/users', (req, res) => {
  res.send('your user is deleted on 3 feb 2024 *** multiple userr')
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
