
const express = require("express");
const cors = require("cors");
const dbConnect = require("./db");
const User = require("./user.model");
const { isValid } = require("ipaddr.js");
const app = express()

app.use(cors())

app.use(express.json())

app.get("/", async (req, res) => {
    let data = await User.find()
    res.send(data)
})

app.post("/", isValid, async (req, res) => {
    let data = await User.create(req.body)
    res.send(data)
})

app.delete("/:id", async (req, res) => {
    let { id } = req.params;
    let data = await User.findByIdAndDelete(id);
    res.send(data)
})

app.patch("/:id", async (req, res) => {
    let { id } = req.params;
    let data = await User.findByIdAndUpdate(id, req.body)
    res.send(data)
})

app.listen(3050, () => {
    console.log("server started");
    dbConnect()
})


