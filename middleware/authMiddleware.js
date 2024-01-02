const jwt = require("jsonwebtoken")
const secretkey = process.env.JWTSECRET

const authMiddleware = (req, res, next) => {
    const bearerHeader = req.headers["authorization"]
    if (typeof bearerHeader !== "undefined") {
        const bearer = bearerHeader.split(" ")
        const token = bearer[1];
    
        jwt.verify(token, secretkey, (err, authData) => {
          if (err) {
            res.send({ message: "Invalid token" })
          } else {
            req.user = authData
            next()
          }
        })
      } else {
        res.send({
          message: "Unauthorized",
        })
      }
}

module.exports = authMiddleware