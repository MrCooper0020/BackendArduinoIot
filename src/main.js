require('dotenv').config({ path: '/src/config/.env' });

const express = require('express');
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;

app.use([express.json(), (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
}]);

const setStatus = require("./api/setStatus");
const getStatus = require("./api/getStatus");

app.get("/arduino-status", getStatus);
app.post("/arduino-status", setStatus);

app.listen(port, () => {
    console.log(`Server running in port ${port}`);
});