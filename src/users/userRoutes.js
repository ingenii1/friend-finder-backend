const {Router} = require('express');
const {addUser, listUser, compareUser, deleteUser} = require('./userControllers');
const {hashPass} = require('../middleware/hashPass');
// const { validate } = require('../middleware/validator');
const userRouter = Router(); 

//HTTP requests
userRouter.post("/user", hashPass, addUser);

userRouter.get("/user", listUser);

userRouter.delete("/user", deleteUser);


module.exports = userRouter;
