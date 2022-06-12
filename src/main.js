require('dotenv').config({ path: '/src/config/.env' });

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const setStatus = require("./api/setStatus");
const getStatus = require("./api/getStatus");

app.get("/arduino-status", getStatus);
app.post("/arduino-status", setStatus);

app.listen(port, () => {
    console.log(`Server running in port ${port}`);
});