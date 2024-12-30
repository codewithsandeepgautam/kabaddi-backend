const mongoose = require("mongoose");
const TypesSchema = mongoose.Schema({
    type: {
        type: String,
        required: true
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
const Types = mongoose.model("Types", TypesSchema);
module.exports = Types;