const mongoose = require("mongoose");

const AuthSChema = new mongoose.Schema({
    Email: {
        type: String,
        required: true,
    },
    Password: {
        type: String,
        required: true,
    }
},{collection: 'Authentication',versionKey: false})

AuthSchema.methods.matchPassword = async(password) => {
    return password = this.password;
}

const Auth = mongoose.model("Authentication",AuthSchema);

module.exports = Auth;