const MatchService = require("../services/match.service");
const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
    MatchService.createMatch(req.body).then((response) => {
        res.status(200).send(response);
    }).catch((err) => {
        res.status(500).send({ err: 'Something went wrong, try again later!' })
    })
})
router.get("/", (req, res) => {
    MatchService.getMatches().then((response) => {
        res.status(200).send(response);
    }).catch((err) => {
        res.status(500).send({ err: 'Something went wrong!' })
    })
})
router.put("/", (req, res) => {
    MatchService.updateMatch(req.query.id, req.body).then((response) => {
        res.status(200).send(response);
    })
        .catch((err) => {
            res.send(500, { error: 'Something went wrong. Try again later!' }, err)
        })
})
router.delete("/", (req, res) => {
    MatchService.deleteMatch(req.query.id).then((response) => {
        res.status(200).send(response);
    })
        .catch((err) => {
            res.status(500).send({ err: 'Something went wrong!' })
        })
})
module.exports = router