///----------------------------------------------------
/// npm init -y
/// npm  install express --save

const express = require("express")
const app = express();
const PORT = 8080;

///----------------------------------------------------
app.get( '/', (req, res) => indexPage(req, res) );
function indexPage(req, res) {
    res.send("Home Page !");
}

///----------------------------------------------------
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});
