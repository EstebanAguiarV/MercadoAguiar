const express = require("express");
const app = express();
const path = require("path")

const PUERTO = 3001
app.listen(PUERTO, function() {
    console.log("Abierto en puerto " + PUERTO );
})

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "views/home.html"))
})

app.use(express.static(path.join(__dirname, "../public")))