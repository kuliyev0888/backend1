const express = require('express')
const app = express()



app.get('/user/:id', function (req, res) {
    const users = [ {id:1,name:"bmw",price:20000},{id:2,name:"Mercedes",price:70000},{id:3,name:"audi",price:30000} ];
        res.json(JSON.stringify(users.find((user) => user.id == req.params.id)));
      });
      app.get('/user', function (req, res) {
        const users = [ {id:1,name:"bmw",price:20000},{id:2,name:"Mercedes",price:70000},{id:3,name:"audi",price:30000} ];
            res.json(users);
          });



app.listen(3000, () => {
    console.log("Server started on 3000 port")
})