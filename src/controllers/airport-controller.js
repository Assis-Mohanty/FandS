const {AirportService}=require("../services/index")

const airportService =new AirportService();

const create=async(req,res)=>{
    try {
        const airport=await airportService.create(req.body)
        return res.status(201).json({
            data: airport,
            success: true,
            message:"Successfully created an airport",
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create an airport",
            err: error
        });
    }
}

const destroy=async(req,res)=>{
    try {
        const response=await airportService.destroy(req.params.id)
        return res.status(201).json({
            data: response,
            success: true,
            message:"Successfully delete an airport",
            err:{}
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to delete an airport",
            err: error
        });
    }
}

const get=async(req,res)=>{
    try {
        const airport=await airportService.get(req.params.id)
        return res.status(201).json({
            data: airport,
            success: true,
            message:"Successfully get an airport",
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to get an airport",
            err: error
        });
    }
}
const getAll=async(req,res)=>{
    try {
        const airports=await airportService.get()
        return res.status(201).json({
            data: airports,
            success: true,
            message:"Successfully got all airports",
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to get an airport",
            err: error
        });
    }
}

const update=async(req,res)=>{
    try {
        const airport=await airportService.update(req.params.id,req.body)
        return res.status(201).json({
            data: airport,
            success: true,
            message:"Successfully update an airport",
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to update an airport",
            err: error
        });
    }
}

module.exports={
    create,
    destroy,
    get,
    update,
    getAll
}