const SettingSchema = require("../schemas/setting.schema");
const cloudinary = require('cloudinary').v2;
const { io } = require("../server");

let service = {};
service.createSettingData = createSettingData;
service.getSettingData = getSettingData;
service.updateSettingData = updateSettingData;
async function createSettingData(body, file) {
    try {
        const imageUrl = file.path;
        if (file) {
            body.image = imageUrl;
        }
        const newSettingData = new SettingSchema(body);
        const savedData = await newSettingData.save();
        return savedData;

    } catch (error) {
        console.log('Error creating setting data:', error);
        return Promise.reject({ error: 'Unable to create image. Try again later!' });
    }
}
async function getSettingData() {
    try {
        const findData = await SettingSchema.find({});
        return findData;
    }
    catch (err) {
        return Promise.reject({ err: 'Unable to get data, Something went wrong!' })
    }
}
async function updateSettingData(id, file, body) {
    try {
        if (file) {
            const cloudData = await cloudinary.uploader.upload(file.path);
            const imageUrl = cloudData.secure_url;
            if (imageUrl) {
                body.image = imageUrl;
            }
        }
        const data = await SettingSchema.findOneAndUpdate({ _id: id }, body, { new: true });
        if (data) {
            io.emit("settingsUpdated", data);
        }
        return data;
    } catch (error) {
        console.log("Error in updating Data", error);
        return Promise.reject("Unable to update data. Try again later!");
    }
}
module.exports = service;