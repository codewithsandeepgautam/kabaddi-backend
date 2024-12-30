const UserService = require("../services/user.service");
const express = require("express");
const router = express.Router();

router.post("/register", (req, res) => {
    UserService.register(req.body).then((response) => {
        res.status(200).send(response);
    }).catch((err) => {
        res.status(500).send({ error: 'Something went wrong. Try again later!', err })
    })
})
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    UserService.login(email, password).then(response => {
        res.status(200).send(response);
    }).catch(error => {
        res.status(400).send(error);
    })
});

module.exports = router;