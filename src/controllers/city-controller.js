const { CityService } = require("../services/index");

const cityService= new CityService();

const create= async(req,res)=>{
    try {
        const city=await cityService.createCity(req.body);
        return res.status(201).json({
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
        return res.status(201).json({
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
        return res.status(201).json({
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
        return res.status(200).json({
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


module.exports={
    create,
    destroy,
    get,
    update
}