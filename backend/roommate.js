const data = require("./data.json")

const roommate = (req, res) => {
    const roll_num = req.params["roll_num"]
    const roommates = []
    let student
    for (hall in data ){
        
        for (room in data[hall] ){
            for (roomie in data[hall][room] ){
                if (data[hall][room][roomie]["Roll No."] === roll_num){
                    student = data[hall][room][roomie]
                    for (r in data[hall][room]){
                        if(data[hall][room][r]["Roll No."] != student["Roll No."])
                            roommates.push(data[hall][room][r])
                    }
                }
            }
        }
    }
    try{
        if (!student){
            throw new Error("Invalid Roll Number")
        }
        res.json(roommates)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

module.exports = roommate 