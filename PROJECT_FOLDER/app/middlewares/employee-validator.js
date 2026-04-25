const { body } = require("express-validator");

exports.employeeValidation = [
    body("start_date").notEmpty(),
    body("end_date").notEmpty()
];