const TournamentService = require("../services/tournament.service");
const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
    TournamentService.createTournament(req.body).then((response) => {
        res.status(200).send(response);
    })
        .catch((err) => {
            res.status(500).send({ err: 'Something went wrong, try again later!' })
        })
})
router.get("/", (req, res) => {
    TournamentService.getTournament().then((response) => {
        res.status(200).send(response);
    })
        .catch((err) => {
            res.status(500).send({ err: 'Something went wrong!' })
        })
})
router.put("/", (req, res) => {
    TournamentService.updateTournament(req.query.id, req.body).then((response) => {
        res.status(200).send(response);
    })
        .catch((err) => {
            res.send(500, { error: 'Something went wrong. Try again later!' }, err)
        })
})
router.delete("/", (req, res) => {
    TournamentService.deleteTournament(req.query.id).then((response) => {
        res.status(200).send(response);
    })
        .catch((err) => {
            res.status(500).send({ err: 'Something went wrong!' })
        })
})
module.exports = router;