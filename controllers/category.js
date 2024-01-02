const Category = require("../models/category")

const index = async(req, res) => {
    try {
        const category = await Category.find(
        res.json(category)
        )
    } catch (error) {
        res.json(error)      
    }
}

const store = async(req, res) => {
    try {
        const category = new Category(req.body)
        await category.save()
    } catch (error) {
        res.json(error)
    }
}

const update = async(req, res) =>{
    try {
        const category = new Category.updateOne({_id: req.params.id}, {$set: req.body})
        res.json(category)
    } catch (error) {
        res.json(error)
    }
}