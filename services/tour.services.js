const { Tour } = require("../model/Tour.schema");

module.exports.getToursService = async (fieldsString) => {
  let fields = {};
  if (fieldsString.fields) {
    fieldsString.fields.split(",").forEach((el) => {
      fields[el] = 1;
    });
  }
  console.log(fields);
  return await Tour.find({}, { ...fields, _id: 0 });
};

module.exports.createToursService = async (data) => {
  return await Tour.create(data);
};

module.exports.getTourByIdService = async (id) => {
  return await Tour.findById(id);
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
