const ScoreService = require("../services/scoreboard.service");
const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
    ScoreService.createScoreboard(req.body).then((response) => {
        res.status(200).send(response);
    }).catch((err) => {
        res.status(500).send({ err: 'Something went wrong, try again later!' })
    })
})
router.get("/", (req, res) => {
    ScoreService.getScores().then((response) => {
        res.status(200).send(response);
    }).catch((err) => {
        res.status(500).send({ err: 'Something went wrong!' })
    })
})
router.put("/", (req, res) => {
    ScoreService.updateScores(req.query.id, req.body).then((response) => {
        res.status(200).send(response);
    })
        .catch((err) => {
            res.send(500, { error: 'Something went wrong. Try again later!' }, err)
        })
})
router.put("/reset", (req, res) => {
    ScoreService.resetScores(req.query.id).then((response) => {
        res.status(200).send(response);
    })
        .catch((err) => {
            res.status(500).send({ err: 'Something went wrong!' })
        })
})
module.exports = router