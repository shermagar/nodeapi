const User = require("../models/users")


exports.index = async(req, res) => {
    // res.send("this is index function")

    try {
        const users = await User.find()
        res.json(users)
    } catch (e) {
        res.json(e)
    }
}


exports.store = async(req, res) => {
    try {
        const user = new User(req.body)
        await user.save()
        res.json(user)
    } catch (e) {
        res.json(e)
    }
}

exports.update = async(req, res) => {
    try {
        const user = await User.updateOne({ _id: req.params.id}, { $set: req.body })
        res.json(user)
    } catch (e) {
        res.json(e)
    }
}

exports.destroy = async(req, res) => {
    try {
        const user = await User.deleteOne({ _id: req.params.id})
        res.json(user)
    } catch (e) {
        res.json(e)
    }
}
