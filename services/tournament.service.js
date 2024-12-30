const TournamentSchema = require("../schemas/tournament.schema");

let service = {};
service.createTournament = createTournament;
service.getTournament = getTournament;
service.updateTournament = updateTournament;
service.deleteTournament = deleteTournament;

async function createTournament(body) {
    try {
        const Tournament = new TournamentSchema(body);
        const savedData = await Tournament.save();
        return savedData;
    }
    catch (err) {
        return Promise.reject({ error: 'Something went wrong!' });
    }
}
async function getTournament() {
    try {
        const findData = await TournamentSchema.find({});
        return findData;
    }
    catch (err) {
        return Promise.reject({ err: 'Unable to get data, Something went wrong!' })
    }
}
async function updateTournament(id, body) {
    try {
        const data = await TournamentSchema.findOneAndUpdate({ _id: id }, body, { new: true });
        return data;
    } catch (error) {
        return Promise.reject("Unable to update type. Try again later!");
    }
}
async function deleteTournament(id) {
    try {
        const findTournament = await TournamentSchema.findByIdAndDelete({ _id: id })
        return findTournament;
    }
    catch (err) {
        return Promise.reject({ err: 'Unable to delete data, Something went wrong!' })
    }
}
module.exports = service;