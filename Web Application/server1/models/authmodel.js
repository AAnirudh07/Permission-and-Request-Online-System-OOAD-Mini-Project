const mongoose = require("mongoose");

const AuthSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
},{collection: 'Authentication',versionKey: false})

AuthSchema.methods.matchPassword = async(password) => {
    return password = this.password;
}

const Auth = mongoose.model("Authentication",AuthSchema);

module.exports = Auth;