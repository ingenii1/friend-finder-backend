const {Router} = require('express');
const {addUser, listUser, userInfo, deleteUser, login} = require('./userControllers');
const {hashPass} = require('../middleware/hashPass');
// const { validate } = require('../middleware/validator');
const userRouter = Router(); 

//HTTP requests
userRouter.post("/user", hashPass, addUser);

userRouter.get("/user", listUser);

userRouter.delete("/user", deleteUser);

userRouter.post("/login", login)

userRouter.post("/user-info", userInfo)


module.exports = userRouter;
