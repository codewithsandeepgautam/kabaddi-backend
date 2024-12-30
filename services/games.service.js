const GamesSchema = require("../schemas/game.schema");

let service = {};
service.createGame = createGame;
service.getGames = getGames;
service.updateGame = updateGame;
service.deleteGame = deleteGame;

async function createGame(body) {
    try {
        const findGame = await GamesSchema.findOne({ gameName: body.gameName });
        if (!findGame) {
            const Games = new GamesSchema(body);
            const savedData = await Games.save();
            return savedData;
        }
        else {
            return "Already exist";
        }
    }
    catch (err) {
        return Promise.reject({ error: 'Something went wrong!' });
    }
}
async function getGames() {
    try {
        const findData = await GamesSchema.find({});
        return findData;
    }
    catch (err) {
        return Promise.reject({ err: 'Unable to get data, Something went wrong!' })
    }
}
async function updateGame(id, body) {
    try {
        const data = await GamesSchema.findOneAndUpdate({ _id: id }, body, { new: true });
        return data;
    } catch (error) {
        return Promise.reject("Unable to update type. Try again later!");
    }
}
async function deleteGame(id) {
    try {
        const findGames = await GamesSchema.findByIdAndDelete({ _id: id })
        return findGames;
    }
    catch (err) {
        return Promise.reject({ err: 'Unable to delete data, Something went wrong!' })
    }
}
module.exports = service;