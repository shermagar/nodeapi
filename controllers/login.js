const User = require("../models/users")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')
// const jwtSecret = '4715aed3c946f7b0a38e6b534a9583628d84e96d10fbc04700770d572af3dce43625dd'
const jwtSecret = process.env.JWTSECRET

exports.login = async (req, res, next) => {
    const { email, password } = req.body
    // Check if email and password is provided
    if (!email || !password) {
      return res.status(400).json({
        message: "email or Password not present",
      })
    }
    try {
        const user = await User.findOne({ email })
        if (!user) {
            res.status(400).json({
                message: "Login not successful",
                error: "User not found",
            })
        } else {
            // comparing given password with hashed password
            bcrypt.compare(password, user.password).then(function (result) {
                if (result) {
                    const maxAge = 3 * 60 * 60;
                    const token = jwt.sign(
                        { id: user._id, email},
                        jwtSecret,
                    {
                        expiresIn: maxAge, // 3hrs in sec
                    })

                    res.cookie("jwt", token, {
                        httpOnly: true,
                        maxAge: maxAge * 1000, // 3hrs in ms
                    })

                    res.status(201).json({
                        message: "User successfully Logged in",
                        user: user._id,
                        token: token
                    })
                } else {
                    res.status(400).json({ message: "Login not succesful" })
                }
            })
        }
    } catch (error) {
      res.status(400).json({
        message: "An error occurred",
        error: error.message,
      })
    }
}