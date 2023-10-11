const {Router} = require("express")
const UsersController = require("../controller/UsersController");

const  userRouter = Router();
const usersController = new UsersController();

userRouter.post("/", usersController.create)
userRouter.put("/:id", usersController.update)



module.exports = userRouter;

