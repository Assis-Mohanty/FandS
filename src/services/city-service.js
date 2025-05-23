const {CityRepository}=require("../repository/index")

class CityService{
    constructor(){
        this.cityRepository =new CityRepository();
    }

    async createCity(data){
        try {
            const city=await this.cityRepository.createCity(data);
            return city
        } catch (error) {
            console.log("Something went wrong at the service layer")
            throw {error}
        }
    }
    async deleteCity(data){
        try {
            const response =this.cityRepository.deleteCity(data);
            return true
        } catch (error) {
            console.log("Something went wrong at the service layer")
            throw {error}
        }
    }

    async getCity(cityId){
        try {
            const city = this.cityRepository.getCity({cityId})
            return city;
        } catch (error) {
            console.log("Something went wrong at the service layer")
            throw {error}
        }
    }
    async updateCity(cityId,data){
        try {
            const city=await this.cityRepository.updateCity({cityId,data});
            return city
        } catch (error) {
            console.log("Something went wrong at the service layer")
            throw {error}
        }
    }
    
    async getAllCities(filter){
        try {
            const cities=this.cityRepository.getAllCities({name:filter.name});
            return cities;
        } catch (error) {
            console.log("Something went wrong at the service layer")
            throw {error}
        }
    }
    async createMulCity(names){
        try {
            const cities=this.cityRepository.createMulCity({names:names})
            return cities
        } catch (error) {
            console.log("Something went wrong at the service layer")
            throw {error}
        }
    }
}
module.exports = CityService;