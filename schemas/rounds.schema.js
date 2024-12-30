const mongoose = require("mongoose");
const RoundsSchema = mongoose.Schema({
    tournamentId: {
        type: mongoose.Schema.ObjectId,
        ref: "Tournament"
    },
    rounds: {
        type: String,
        required: true,
    },
});

const Rounds = mongoose.model("Rounds", RoundsSchema);
module.exports = Rounds;