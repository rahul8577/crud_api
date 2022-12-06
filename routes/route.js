const express= require("express");
const route=express.Router();
const controller = require("../controllers/userController");

route.get('/', controller.index);
route.get('/create', controller.create);
route.get('/edit', controller.edit);
route.post('/insert', controller.insert);
route.delete('/delete/:id', controller.destroy);

module.exports=route;