const {Airplane}=require("../models/index")

class AirplaneRespository{
    async getAirplane(id){
        try {
            const airplane=await Airplane.findByPk(id)
            return airplane;
        } catch (error) {
            console.log("Something went wrong with the repository layer")
            throw {error};
        }
    }
}

module.exports=AirplaneRespository