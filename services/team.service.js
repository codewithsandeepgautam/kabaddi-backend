const TeamsSchema = require("../schemas/team.schema");
const { io } = require("../server");

let service = {};
service.createTeam = createTeam;
service.getTeams = getTeams;
service.updateTeam = updateTeam;
service.deleteTeam = deleteTeam;

async function createTeam(body) {
    try {
        const Team = new TeamsSchema(body);
        const savedData = await Team.save();
        return savedData;
    }
    catch (err) {
        return Promise.reject({ error: 'Something went wrong!' });
    }
}
async function getTeams() {
    try {
        const findData = await TeamsSchema.find({});
        return findData;
    }
    catch (err) {
        return Promise.reject({ err: 'Unable to get data, Something went wrong!' })
    }
}
async function updateTeam(id, body) {
    try {
        const data = await TeamsSchema.findOneAndUpdate({ _id: id }, body, { new: true });
        if (data) {
            io.emit("teamsUpdated", data);
        }
        return data;
    } catch (error) {
        return Promise.reject("Unable to update type. Try again later!");
    }
}
async function deleteTeam(id) {
    try {
        const findTeam = await TeamsSchema.findByIdAndDelete({ _id: id })
        return findTeam;
    }
    catch (err) {
        return Promise.reject({ err: 'Unable to delete data, Something went wrong!' })
    }
}
module.exports = service;