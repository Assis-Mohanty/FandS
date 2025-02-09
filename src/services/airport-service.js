const {AirportRespository}=require("../repository/index")

class AirportService {
    constructor(){
        this.airportRespository=new AirportRespository();
    }
    async createAirport(name,address,cityId){
        try {
            const airport= await this.airportRespository.createAirport(name,address,cityId)
            return airport;
        } catch (error) {
            console.log("Something went wrong in the service layer ")
            throw error

        }
    }
    async deleteAirport(AirportId){
        try {
            const response=await this.airportRespository.deleteAirport(AirportId)
            return response;
        } catch (error) {
            console.log("Something went wrong in the service layer ")
            throw error

        }
    }
    async getAirport(AirportId){
        try {
            const airport=this.getAirport(AirportId)
            return airport;
        } catch (error) {
            console.log("Something went wrong in the service layer ")
            throw error
        }
    }
    async updateAirport(data,AirportId){
        try {
            const airport=await this.airportRespository.updateAirport(data,AirportId)
            return airport;
        } catch (error) {
            console.log("Something went wrong in the service layer ")
            throw error
        }
    }
}
module.exports = AirportService;