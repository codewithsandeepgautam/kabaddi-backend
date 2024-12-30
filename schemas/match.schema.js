const mongoose = require("mongoose");
const MatchSchema = mongoose.Schema({
  team1Id: {
    type: mongoose.Schema.ObjectId,
    ref: "Teams"
  },
  team2Id: {
    type: mongoose.Schema.ObjectId,
    ref: "Teams"
  },
  tournamentId: {
    type: mongoose.Schema.ObjectId,
    ref: "Tournament"
  },
  roundsId: {
    type: mongoose.Schema.ObjectId,
    ref: "Rounds"
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
  video: {
    type: String,
    required: true,
    default: "https://www.youtube.com/embed/WSYBm0cOxok?si=VswQCc9rVSSzwQBm"
  }
});

const Match = mongoose.model("Match", MatchSchema);
module.exports = Match;