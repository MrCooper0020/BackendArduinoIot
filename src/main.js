require('dotenv').config({ path: '/src/config/.env' });

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const SET_STATUS = require("./api/setStatus");
const GET_STATUS = require("./api/getStatus");

app.get("/arduino-status", GET_STATUS);
app.post("/arduino-status", SET_STATUS);

app.listen(port, () => {
    console.log(`Server running in port ${port}`);
});