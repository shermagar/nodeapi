const mongodb = require("mongoose")
const bcrypt = require("bcrypt")

const userSchema = mongodb.Schema({
    name:{
        type: String,
        required: true
    },

    phone:{
        type: Number,
        required: true
    },

    address:{
        type: String,
        required: true
    },

    email:{
        type: String,
        required: true,
        unique: true
    },

    password:{
        type: String,
        required: true  
    },

    status:{
        type: Boolean
    }
})

userSchema.pre("save", async function(next) {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(this.password, salt);
      this.password = hashPassword;
      next();
    } catch (error) {
      next(error);
    }
  });

const User = new mongodb.model("User", userSchema)
module.exports = User