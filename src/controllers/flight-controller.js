const {FlightService} =require("../services/index")
const {SuccessCodes}=require("../utils/error-codes")

const flightService=new FlightService();

const create=async(req,res)=>{
    try {
        const flightRequestData={
            flightNumber:req.body.flightNumber,
            airplaneId:req.body.airplaneId,
            departureAirportId:req.body.departureAirportId,
            arrivalAirportId:req.body.arrivalAirportId,
            departureTime:req.body.departureTime,
            arrivalTime:req.body.arrivalTime,
            price:req.body.price
        }
        const flight = await flightService.createFlight(flightRequestData);
        return res.status(SuccessCodes.CREATED).json({
            data:flight,
            success:true,
            message:"Successfully created a flight",
            err:{}
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to create a flight",
            err:error
        })
    }
}

const get=async(req,res)=>{
    try {
        const flight =await flightService.getFlightData(req.params.id);
        return res.status(SuccessCodes.OK).json({
            data:flight,
            success:true,
            message:"Successfully got a flight",
            err:{}
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to get a flight",
            err:error
        })
    }
}
const getAll=async(req,res)=>{
    try {
        const flights=await flightService.getAllFlights(req.query)
        return res.status(SuccessCodes.OK).json({
            data:flights,
            success:true,
            message:"Successfully got all flight",
            err:{}
        }) 
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to get all flight",
            err:error
        })
    }
    
}
const update=async(req,res)=>{
    try {
        const flight =await flightService.updateFlight(req.params.id,req.body)
        return res.status(SuccessCodes.OK).json({
            data:flight,
            success:true,
            message:"Successfully updated a flight",
            err:{}
        }) 
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to update a flight",
            err:error
        })
    }
}

module.exports={
    create,
    get,
    getAll,
    update
}