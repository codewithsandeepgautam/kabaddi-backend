const mongoose = require("mongoose");
const GameSchema = mongoose.Schema({
    gameName: {
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
const Games = mongoose.model("Games", GameSchema);
module.exports = Games;