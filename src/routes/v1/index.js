const express =require("express")
const CityController  = require("../../controllers/city-controller");
const AiprortController=require("../../controllers/airport-controller");
const FlightController=require("../../controllers/flight-controller");
const {FlightMiddleWares}=require("../../middlewares/index")
const router=express.Router();
router.post("/city",CityController.create);
router.delete("/city/:id",CityController.destroy);
router.get('/city/:id',CityController.get);
router.patch("/city/:id",CityController.update);
router.get("/city",CityController.getAll)
router.post("/cities",CityController.createMulCity)


router.post("/airport",AiprortController.create);
router.delete("/airport/:id",AiprortController.destroy);
router.get('/airport/:id',AiprortController.get);
router.patch("/airport/:id",AiprortController.update);
router.get('/airports',AiprortController.getAll);

router.post("/flights",FlightMiddleWares,FlightController.create);
router.get("/flight/:id",FlightController.get);
router.get("/flights",FlightController.getAll);
router.patch("/flight/:id",FlightController.update);

module.exports=router;