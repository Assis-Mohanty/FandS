const {Airport} =require("../models/index")


class AirportRespository {
    async createAirport({name,address,cityId}){
        try {
            const airport=await Airport.create({
                name:name,
                address:address,
                cityId:cityId
            })
            return airport
        } catch (error) {
            console.log("Something went wrong in the repository layer")
            throw error
        }
    }
    async deleteAirport({AirportId}){
        try {
            await Airport.destroy({
                where:{
                    id:AirportId
                }
            })
            return true
        } catch (error) {
            console.log("Something went wrong in the repository layer")
            throw error
        }
    }
    async getAirport({AirportId}){
        try {
            const airport=await Airport.findOne({
                where:{
                    id:AirportId
                }
            })
            return airport
        } catch (error) {
            console.log("Something went wrong in the repository layer")
            throw error
        }
    }
    async updateAirport({data,AirportId}){
        try {
            const airport = await Airport.update(data,{
                where:{
                    id:AirportId
                }
            })
            return airport
        } catch (error) {
            console.log("Something went wrong in the repository layer")
            throw error
        }
    }
}

module.exports=AirportRespository;