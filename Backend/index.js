const express = require("express");
const app = express();
const port = 5000
const path = require("path")

app.use(express.static("static"))

app.get("/", (req, res) => {
    res.sendFile(path.resolve("/index.html"));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})