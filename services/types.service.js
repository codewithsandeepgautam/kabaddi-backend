const TypesSchema = require("../schemas/types.schema");

let service = {};
service.createTypes = createTypes;
service.getTypes = getTypes;
service.updateTypes = updateTypes;
service.deleteTypes = deleteTypes;

async function createTypes(body) {
    try {
        const findType = await TypesSchema.findOne({ type: body.type });
        if (!findType) {
            const Types = new TypesSchema(body);
            const savedData = await Types.save();
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
async function getTypes() {
    try {
        const findData = await TypesSchema.find({});
        return findData;
    }
    catch (err) {
        return Promise.reject({ err: 'Unable to get data, Something went wrong!' })
    }
}
async function updateTypes(id, body) {
    try {
        const data = await TypesSchema.findOneAndUpdate({ _id: id }, body, { new: true });
        return data;
    } catch (error) {
        return Promise.reject("Unable to update type. Try again later!");
    }
}
async function deleteTypes(id) {
    try {
        const findTypes = await TypesSchema.findByIdAndDelete({ _id: id })
        return findTypes;
    }
    catch (err) {
        return Promise.reject({ err: 'Unable to delete data, Something went wrong!' })
    }
}
module.exports = service;