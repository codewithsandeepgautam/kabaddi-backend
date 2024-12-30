const SettingService = require("../services/setting.service");
const express = require("express");
const router = express.Router();

router.post('/', (req, res) => {
    SettingService.createSettingData(req.body, req.file).then((response) => {
        res.status(200).send(response)
    }).catch((error) => {
        res.status(500).send({ error: 'Something went wrong. Try again later!' })
        console.log(error)
    })
})
router.get("/", (req, res) => {
    SettingService.getSettingData().then((response) => {
        res.status(200).send(response);
    })
        .catch((err) => {
            res.status(500).send({ err: 'Something went wrong!' })
        })
})
router.put("/", (req, res) => {
    SettingService.updateSettingData(req.query.id,req.file, req.body,).then((response) => {
        res.status(200).send(response)
    }).catch((error) => {
        res.send(500, { error: 'Something went wrong. Try again later!' }, error)
    })
})
module.exports = router;