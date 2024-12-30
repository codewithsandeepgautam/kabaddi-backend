const mongoose = require("mongoose");
const ScoreboardSchema = mongoose.Schema({
    team1Score: {
        type: Number,
        required: true
    },
    team2Score: {
        type: Number,
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
    },
}, {
    timestamps: true
});
const Scoreboard = mongoose.model("Scoreboard", ScoreboardSchema);
module.exports = Scoreboard;