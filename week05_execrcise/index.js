const express = require('express');
const app = express();
const router = express.Router();
var fs = require('fs');




/*
- Create new html file name home.html 
- add <h1> tag with message "Welcome to ExpressJs Tutorial"
- Return home.html page to client
*/
router.get('/home', (req,res) => {
  res.sendFile('/home.html', {root: __dirname });
});

/*
- Return all details from user.json file to client as JSON format
*/
router.get('/profile', (req,res) => {
  var data = require('./user.json')
  res.send(data);
});

/*
- Modify /login router to accept username and password as query string parameter
- Read data from user.json file
- If username and  passsword is valid then send resonse as below 
    {
        status: true,
        message: "User Is valid"
    }
- If username is invalid then send response as below 
    {
        status: false,
        message: "User Name is invalid"
    }
- If passsword is invalid then send response as below 
    {
        status: false,
        message: "Password is invalid"
    }
*/
router.get('/login', (req,res) => {
  var data = require('./user.json')
  const query = req.query;
  if(query.username != data.username) {
    res.status(401).json({status: "false", message: "User Name is invalid"})
  }
  else if(query.password != data.password) {
    res.status(401).json({status: "false", message: "Password is invalid"})
  }
  else
  {
    res.status(200).json({status: "true", message: "User is invalid"})
  }

});

/*
- Modify /logout route to accept username as parameter and display message
    in HTML format like <b>${username} successfully logout.<b>
*/
router.get('/logout', (req,res) => {
  const query = req.query;
  res.writeHead(200, { 'Content-Type':'text/html'});
  res.end(`<b>${query.username} successfully logout.<b>`);

});

app.use('/', router);

app.listen(process.env.port || 8081);

console.log('Web Server is listening at port '+ (process.env.port || 8081));