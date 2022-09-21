const express = require("express");
const ToursController = require("../controller/Tour.controller");
const router = express.Router();

router
  .route("/")
  .get(ToursController.getTours)
  .post(ToursController.createTours);

router.route("/cheapest").get(ToursController.getCheapestTours);
router.route("/trending").get(ToursController.getTrendingTours);

router
  .route("/:id")
  .get(ToursController.getTourById)
  .patch(ToursController.updateTour);
module.exports = router;
