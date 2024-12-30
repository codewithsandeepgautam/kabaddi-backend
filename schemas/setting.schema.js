const mongoose = require("mongoose");
const SettingSchema = mongoose.Schema({
    bottomBody: {
        type: Boolean,
        required: true,
        default: true
    },
    scoreboardSetting: {
        type: Boolean,
        required: true,
        default: true
    },
    matchRound: {
        type: String,
        required: true,
    },
    matchRoundShow: {
        type: Boolean,
        required: true,
        default: true
    },
    mainScreenTitle: {
        type: String,
        required: true
    },
    mainScreenTitleShow: {
        type: Boolean,
        required: true,
        default: true

    },
    subtitleSetting: {
        type: String,
        required: true
    },
    subtitleSettingShow: {
        type: Boolean,
        required: true,
        default: true
    },
    bottomTitleSetting: {
        type: String,
        requitred: true
    },
    bottomTitleSettingShow: {
        type: Boolean,
        required: true,
        default: true
    },
    image: {
        type: String,
        required: true,
    },
    imageShow: {
        type: Boolean,
        required: true,
        default: true
    }
});

const Setting = mongoose.model("Setting", SettingSchema);
module.exports = Setting;
