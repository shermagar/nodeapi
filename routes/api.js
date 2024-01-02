    const express = require("express")
    const route = express.Router()
    const userController = require("../controllers/user")
    const loginController = require("../controllers/login")
    const authMiddleware = require("../middleware/authMiddleware")

    route.route("/login").post(loginController.login)

    route.route("/").get(authMiddleware, userController.index)
    route.route("/store").post(userController.store)
    route.route("/update/:id").put(userController.update)
    route.route("/destroy/:id").delete(userController.destroy)

    module.exports = route
