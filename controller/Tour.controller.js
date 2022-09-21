const {
  getToursService,
  createToursService,
  getTourByIdService,
  getTrendingTours,
  getCheapestToursService,
  updateTourService,
} = require("../services/tour.services");

module.exports.getTours = async (req, res, next) => {
  try {
    // pagination

    const tour = await getToursService(req.query);
    res.send(tour);
  } catch (error) {
    next(error);
  }
};

module.exports.createTours = async (req, res, next) => {
  try {
    const tour = await createToursService(req.body);
    res.status(200).send({ success: true, tour });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
    next(error);
  }
};

module.exports.getTourById = async (req, res, next) => {
  try {
    const tour = await getTourByIdService(req.params.id);
    res.status(200).send(tour);
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
    next(error);
  }
};

module.exports.getTrendingTours = async (req, res, next) => {
  try {
    const tour = await getTrendingTours();
    res.status(400).send(tour);
  } catch (error) {
    next(error);
  }
};

module.exports.getCheapestTours = async (req, res, next) => {
  try {
    const tour = await getCheapestToursService();
    res.status(200).send(tour);
  } catch (error) {
    next(error);
  }
};

module.exports.updateTour = async (req, res, next) => {
  try {
    const tour = await updateTourService(req.params.id, req.body);
    res.status(200).send(tour);
  } catch (error) {
    next(error);
  }
};
