const ScoresSchema = require("../schemas/scoreboard.schema");
const { io } = require("../server");

let service = {};
service.createScoreboard = createScoreboard;
service.getScores = getScores;
service.updateScores = updateScores;
service.resetScores = resetScores;

async function createScoreboard(body) {
    try {
        const score = new ScoresSchema(body);
        const savedData = await score.save();
        return savedData;
    } catch (err) {
        return Promise.reject({ error: 'Something went wrong!' });
    }
}

async function getScores() {
    try {
        return await ScoresSchema.find({});
    } catch (err) {
        return Promise.reject({ error: 'Unable to get scores, Something went wrong!' });
    }
}

async function updateScores(id, body) {
    try {
        const updateData = await ScoresSchema.findOneAndUpdate({ _id: id }, body, { new: true });
        if (updateData) {
            io.emit("scoreUpdated", updateData);
        }
        return updateData;
    } catch (error) {
        console.error("Error updating scores:", error);
        return Promise.reject({ error: "Unable to update scores, Try again later!" });
    }
}


async function resetScores(id) {
    try {
        const resetData = await ScoresSchema.findOneAndUpdate(
            { _id: id },
            { team1Score: 0, team2Score: 0 },
            { new: true }
        );
        if (resetData) {
            io.emit("scoreReset", resetData);
        }
        return resetData;
    } catch (err) {
        return Promise.reject({ error: 'Unable to reset scores, something went wrong!' });
    }
}

module.exports = service;
