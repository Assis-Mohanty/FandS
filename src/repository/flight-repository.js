const {Flight} =require('../models/index')
const {Op} = require("sequelize")
class FlightRepository{

    #createFilter(data){
        let filter={};
        if(data.arrivalAirportId){
            filter.arrivalAirportId=data.arrivalAirportId
        }
        if(data.departureAirportId){
            filter.departureAirportId=data.departureAirportId
        }
        // if(data.minPrice&&data.maxPrice){
        //     Object.assign(filter,{
        //         [Op.between]:[
        //             {price:{[Op.gte]: data.minPrice}},
        //             {price:{[Op.lte]: data.maxPrice}}
        //         ]                                                                     
        //     }
        // )
        // }
        // if(data.minPrice){
        //     Object.assign(filter,{
        //         price:{[Op.gte]: data.minPrice}
        //     })
        // }
        // if(data.maxPrice){
        //     Object.assign(filter,{
        //         price:{[Op.lte]: data.maxPrice}
        //     })
        // }
        //This approch works but creates an extra query of minPrice filter or maxPrice filter

        let priceFilter=[];
        if(data.minPrice){
            priceFilter.push({price:{[Op.gte]: data.minPrice}})
        }
        if(data.maxPrice){
            priceFilter.push({price:{[Op.lte]: data.maxPrice}})
        }
        Object.assign(filter,{[Op.and]:priceFilter})
        return filter;

    }

    async createFlight(data){
        try {
            const flight = await Flight.create(data);
            return flight; 
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
    async getFlight(flightId){
        try {
            const flight = await Flight.findByPk(flightId);
            return flight; 
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
    async getAllFlights(filter){
        try {
            const filterObject = this.#createFilter(filter)
            const flights = await Flight.findAll({
                where:filterObject
            });
            return flights; 
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

}

module.exports=FlightRepository;