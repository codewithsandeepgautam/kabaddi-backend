const Users = require("../schemas/user.schema");
const PasswordService = require("./password.service");
let service = {};

service.register = register;
service.login = login;

async function register(body) {
    const { fullname, email, password, phoneNumber, type } = body;
    try {
        const existEmail = await Users.findOne({ email: email })
        const resp = await PasswordService.passwordEncryption(password);
        let data = {
            fullname: fullname,
            email: email,
            password: resp.password,
            phoneNumber: phoneNumber,
            type: type,
        }
        if (!existEmail) {
            let newUser = new Users(data);
            const user = newUser.save();
            return { userId: user._id };
        } else {
            return "Email already exist"
        }
    }
    catch (err) {
        console.log("Error saving data");
        return Promise.reject("Something went wrong!");
    }
}
async function login(email, password) {
    try {
        const user = await Users.findOne({ email: email });
        if (!user) {
            return Promise.reject('Incorrect Email');
        }
        const response = await PasswordService.passwordDecryption(user.password);
        if (response.password === password) {
            const data = {
                userId: user._id,
                email: user.email,
                password: response.password
            }
            return { loggedIn: true, data: data };
        }
        else {
            return Promise.reject('Incorrect Password');
        }
    } catch (err) {
        return Promise.reject('Something went wrong', err);
    }
}
module.exports = service;