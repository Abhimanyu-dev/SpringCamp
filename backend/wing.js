const data = require("./data.json")

const wingmates = (req, res) => {
    const hall = req.params["hall"]
    const wing = req.params["wing"]
    const wing_length = wing.substring(0, 2) === "E1" ? 4 : 3
    try{
        const hallmates = data[`HALL${hall}`]
        const wingmates = []
        if (!hallmates){
            throw new Error("Invalid Hall")
        }
        for (room in hallmates){
            if (room.substring(0, wing_length)===wing){
                wingmates.push(hallmates[room])
            }
        }
        if(wingmates.length == 0){
            throw new Error("Invalid Wing")
        }
        res.json(wingmates)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

module.exports = wingmates