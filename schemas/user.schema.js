const mongoose = require("mongoose");
const UsersSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {    
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    // adminId: {
    //     type: mongoose.Schema.ObjectId,
    //     ref: 'Users'
    // },
    type: {
        type: mongoose.Schema.ObjectId,
        ref: 'Types'
    },
    isActive: {
        type: Boolean,
        required: true,
        default: true
    },
    isDeleted: {
        type: Boolean,
        required: true,
        default: false
    }
}, {
    timestamps: true
});
const Users = mongoose.model("Users", UsersSchema);
module.exports = Users;