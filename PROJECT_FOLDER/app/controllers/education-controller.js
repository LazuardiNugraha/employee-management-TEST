const educationService = require('../services/education-service');
const { created, fetched } = require('../utils/success-handler');

exports.create = async (req, res, next) => {
  try {
    const result = await educationService.createEducation(req.body);

    return created(res, result, 'Education Created Successfully');
  } catch (error) {
    next(error);
  }
};

exports.getById = async (req, res, next) => {
  try {
    const result = await educationService.getEducationById(req.params.id);

    return fetched(res, result, 'Education Fetched Successfully');
  } catch (error) {
    next(error);
  }
};

exports.updateEducationById = async (req, res, next) => {
  try {
    const result = await educationService.updateEducation(req.params.id, req.body);

    return fetched(res, result, 'Education Updated');
  } catch (error) {
    next(error);
  }
};

exports.deleteEducationById = async (req, res, next) => {
  try {
    const result = educationService.deleteEducationById(req.params.id);

    return fetched(res, null, 'Education Deleted Successfully');
  } catch (error) {
    next(error);
  }
};
