const MatchSchema = require("../schemas/match.schema");

let service = {}
service.createMatch = createMatch;
service.getMatches = getMatches;
service.updateMatch = updateMatch;
service.deleteMatch = deleteMatch;

async function createMatch(body) {
    try {
        const match = new MatchSchema(body);
        const savedData = match.save();
        return savedData;
    }
    catch (err) {
        return Promise.reject({ error: 'Something went wrong!' });
    }
}
async function getMatches() {
    try {
        const data = await MatchSchema.find({});
        return data;
    } catch (err) {
        return Promise.reject({ err: 'Unable to get data, Something went wrong!' })
    }
}
async function updateMatch(id, body) {
    try {
        const data = await MatchSchema.findOneAndUpdate({ _id: id }, body, { new: true });
        return data;
    } catch (error) {
        return Promise.reject("Unable to update type. Try again later!");
    }
}
async function deleteMatch(id) {
    try {
        const findMatch = await MatchSchema.findByIdAndDelete({ _id: id })
        return findMatch;
    }
    catch (err) {
        return Promise.reject({ err: 'Unable to delete data, Something went wrong!' })
    }
}

module.exports = service;