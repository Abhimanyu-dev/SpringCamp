const express = require("express")
const data = require("./data.json")
const hallmates = require("./hall")
const wingmates = require("./wing")
const wingiesOrNot = require("./WingiesOrNot")
const roommate = require("./roommate")
const wingies = require("./wingmates")

const PORT = process.env.PORT || 4000
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

// Homepage

app.use((req, res, next) => {
    console.log(req.method)
    console.log(req.url)
    next()

})
app.get("/api", (req, res) => {
    res.json(data)
})

app.get("/api/roommate/:roll_num", (req, res)=> roommate(req, res))

//Check whether two students are Wingies
app.post("/api/WingiesOrNot", (req, res) => wingiesOrNot(req, res))

//Get Wingies
app.get("/api/:wing", (req, res) => wingies(req, res))

//Get Hall
app.get("/api/:hall", (req, res) => hallmates(req, res))

//Get Wing
app.get("/api/:hall/:wing", (req, res) => wingmates(req, res))


//Error Handler
app.use((req, res) => {
    res.status(400).json({error: "No such page"})
})
 
app.listen(PORT, () => {
    console.log("Listening on port", PORT)
})