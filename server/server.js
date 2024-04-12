const express = require("express");
const cors = require("cors");

const app = express();

const corsOption = {
    origin: "http://localhost/",
    optionsSuccessStatus:  200,
};

app.use(cors(corsOption));