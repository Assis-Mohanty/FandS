const { CityService } = require("../services/index");
const {SuccessCodes}=require("../utils/error-codes")

const cityService= new CityService();

const create= async(req,res)=>{
    try {
        const city=await cityService.createCity(req.body);
        return res.status(SuccessCodes.CREATED).json({
            data: city,
            success: true,
            message:"Successfully created a city",
            err:{}
        }); 
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to create a city",
            err:error
        })
    }
}
const destroy = async (req, res) => {
    try {
        const cityId = req.params.id; // Extract cityId from req.params
        const response = await cityService.deleteCity({ cityId });
        return res.status(SuccessCodes.OK).json({
            data: response,
            success: true,
            message: "Successfully deleted a city",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to delete a city",
            err: error
        });
    }
};
const get=async(req,res)=>{
    try {
        const cityId=req.params.id
        const city=await cityService.getCity({cityId});
        return res.status(SuccessCodes.OK).json({
            data: city,
            success: true,
            message:"Successfully fetched a city",
            err:{}
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to get a city",
            err:error
        })
    }
}
const update = async (req, res) => {
    try {
        const response = await cityService.updateCity(req.params.id, req.body);
        return res.status(SuccessCodes.OK).json({
            data: response,
            success: true,
            message: 'Successfully updated the city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to update the city',
            err: error
        });
    }
}
const getAll=async(req,res)=>{
    try {
        const cities= await cityService.getAllCities(req.query)
        return res.status(SuccessCodes.OK).json({
            data: cities,
            success: true,
            message: 'Successfully updated the city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetch all cities',
            err: error
        });
    }
    
}
const createMulCity=async(req,res)=>{
    try {
        const cities=await cityService.createMulCity(req.body)
        return res.status(201).json({
            data:cities,
            success:true,
            message:"Successfully created multiple cities",
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to create multiple cities',
            err: error
        });
    }
}


module.exports={
    create,
    destroy,
    get,
    update,
    getAll,
    createMulCity
}