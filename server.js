const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { Server } = require('socket.io');
const bodyParser = require('body-parser');
const app = express();
const { createServer } = require('http');
const { imageUploadMiddleware } = require('./middleWare/imageUpload');
require('dotenv').config();
const server = createServer(app);

const io = new Server(server, {
    cors: {
        origin: process.env.SOCKET_URL,
        methods: ["GET", "POST", "PUT"],
        credentials: true,
        allowedHeaders: ["Content-Type"],
    },
});
app.use(cors({
    origin: process.env.SOCKET_URL,
    methods: ["GET", "POST", "PUT"],
    credentials: true,
    allowedHeaders: ["Content-Type"],
}));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI).then(resp => {
    console.log("Database Connected!")
}).catch(error => console.log("Unable to connect to DB!"));
module.exports = { io };
app.get('/', function (req, res) {
    res.send('WORKING')
})
app.use("/api/users", require("./controllers/user.controller"));
app.use("/api/types", require("./controllers/types.controller"));
app.use("/api/games", require("./controllers/games.controller"));
app.use("/api/teams", require("./controllers/team.controller"));
app.use("/api/tournament", require("./controllers/tournament.controller"));
app.use("/api/rounds", require("./controllers/rounds.controller"));
app.use("/api/match", require("./controllers/match.controller"));
app.use("/api/score", require("./controllers/scoreboard.controller"));
app.use("/api/settings", imageUploadMiddleware("image"), require("./controllers/setting.controller"));
server.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});

io.on("connection", (socket) => {
    console.log("User Connected:", socket.id);
    socket.on("connect", () => {
        console.log("connected:", socket.id);
    });
    socket.on("disconnect", () => {
        console.log("User Disconnected:", socket.id);
    });
});

