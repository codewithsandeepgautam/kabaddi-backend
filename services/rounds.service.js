const RoundsSchema = require("../schemas/rounds.schema");

let service = {}
service.createRounds = createRounds;
service.getRounds = getRounds;
service.updateRounds = updateRounds;
service.deleteRounds = deleteRounds;


async function createRounds(body) {
    try {
        const findRound = await RoundsSchema.findOne({ rounds: body.rounds });
        if (!findRound) {
            const Round = new RoundsSchema(body);
            const savedData = await Round.save();
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
async function getRounds() {
    try {
        const findData = await RoundsSchema.find({});
        return findData;
    }
    catch (err) {
        return Promise.reject({ err: 'Unable to get data, Something went wrong!' })
    }
}
async function updateRounds(id, body) {
    try {
        const data = await RoundsSchema.findOneAndUpdate({ _id: id }, body, { new: true });
        return data;
    } catch (error) {
        return Promise.reject("Unable to update type. Try again later!");
    }
}
async function deleteRounds(id) {
    try {
        const findRounds = await RoundsSchema.findByIdAndDelete({ _id: id })
        return findRounds;
    }
    catch (err) {
        return Promise.reject({ err: 'Unable to delete data, Something went wrong!' })
    }
}
module.exports = service;