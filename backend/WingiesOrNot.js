const data = require("./data.json")

const wingiesOrNot = (req, res) => {
    const roll_one = req.body["roll_one"]
    const roll_two = req.body["roll_two"]
    let student_one, student_two
    for (hall in data){
        for(room in data[hall]){
            for (roommate in data[hall][room]){
                switch(data[hall][room][roommate]["Roll No."]){
                    case roll_one:
                        student_one = data[hall][room][roommate]
                        break
                    case roll_two:
                        student_two = data[hall][room][roommate]
                        break
                    
                }
            }
        }
    } 
    try{
        if(!student_one || !student_two){
            throw new Error("Invalid Roll Number")
        }
        const wing_one = student_one["Room"].substring(0, 2) !== "E1" ? student_one["Room"].substring(0, 3) : student_one["Room"].substring(0, 4)
        const wing_two = student_two["Room"].substring(0, 2) !== "E1" ? student_two["Room"].substring(0, 3) : student_two["Room"].substring(0, 4)
        res.json({response: wing_one === wing_two, student_one: student_one, student_two: student_two})
    }catch(error){
        res.json({error: error.message})
    }
}

module.exports = wingiesOrNot