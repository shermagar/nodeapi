const mongodb = require("mongoose")

const productSchema = mongodb.Schema({
    name:{
        type: String,
        required: true
    },

    image:{
        type: File,
        required: true
    },

    price:{
        type: Number,
        required: true
    },

    status:{
        type: Boolean
    },

    createdAt:{
        type: Date
    },

    updatedAt:{
        type: Date
    }
})

const Product = new mongodb.model("User", productSchema)
module.exports = Product