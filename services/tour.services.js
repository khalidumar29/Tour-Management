const { Tour, Visitor } = require("../model/Tour.schema");

module.exports.getToursService = async (fieldsString) => {
  let fields = {};
  if (fieldsString.fields) {
    fieldsString.fields.split(",").forEach((el) => {
      fields[el] = 1;
    });
  }
  let limits, skips;
  if (fieldsString.page) {
    const { page = 1, limit = 10 } = fieldsString;
    const skip = (page - 1) * parseInt(limit);
    skips = skip;
    limits = parseInt(limit);
  }
  const tour = await Tour.find({}, { ...fields, _id: 0 })
    .skip(skips)
    .limit(limits);
  const total = await Tour.countDocuments({});
  const page = Math.ceil(total / limits);
  return { total, page, tour };
};

module.exports.createToursService = async (data) => {
  return await Tour.create(data);
};

module.exports.getTourByIdService = async (id) => {
  const tour = await Tour.findById(id);
  const count = tour.__v + 1;
  return await Tour.findByIdAndUpdate(id, { __v: count }, { new: true });
};

module.exports.getTrendingTours = async () => {
  return await Tour.find({}).sort({ __v: -1 }).limit(3);
};
module.exports.getCheapestToursService = async () => {
  return await Tour.find({}).sort({ price: 1 }).limit(3);
};

module.exports.updateTourService = async (id, data) => {
  return await Tour.findByIdAndUpdate(id, data, { new: true });
};
