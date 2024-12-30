const mongoose = require("mongoose");
const TournamentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    gameId: {
         type: mongoose.Schema.ObjectId,
         ref : "Games"
    },
    remarks: {
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
const Tournament = mongoose.model("Tournament", TournamentSchema);
module.exports = Tournament;