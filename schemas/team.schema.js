const mongoose = require("mongoose");
const TeamSchema = mongoose.Schema({
    teamNameIst: {
        type: String,
        required: true
    },
    teamNameSec: {
        type: String,
        required: true
    },
    swapTeam : {
        type: Boolean,
        required: true,
        default: false
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
const Teams = mongoose.model("Teams", TeamSchema);
module.exports = Teams;