const express = require("express")
const connection_db = process.env.CONNECTION_STRING
// const connection_db = "mongodb://127.0.0.1:27017/nodeproject"
const mongodb = require("mongoose")

mongodb.connect(connection_db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

.then(() => {
    console.log("connection success");
})
.catch((e) => {
    console.log(e);
});