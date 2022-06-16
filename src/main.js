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

const setStatus = require("./api/v1/setStatus");
const getStatus = require("./api/v1/getStatus");
const getStatusV2 = require("./api/v2/getStatus");

app.get("/v1/arduino-status", getStatus);
app.post("/v1/arduino-status", setStatus);
app.get("/v2/arduino-status", getStatusV2);

app.listen(port, () => {
    console.log(`Server running in port ${port}`);
});