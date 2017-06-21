var express = require("express"),
    app     = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("home");
});

app.get("/home", function (req, res) {
    res.redirect("/");
});

app.listen(8000, "localhost", function () {
    console.log("Server is running...");
});