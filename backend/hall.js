const data = require("./data.json")

const hallmates = (req, res) => {
    const hall = req.params["hall"]
    try{
        const hallmates = data[`HALL${hall}`]
        if(!hallmates){
            throw new Error("Invalid Hall")
        }
        res.json(hallmates)
    }catch(error){
        res.status(400).json({"Error" : error.message})
    }   
}

module.exports = hallmates