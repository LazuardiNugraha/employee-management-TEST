const router = require("express").Router();
const employeeController = require("../controllers/employee-controller");
const { employeeValidation } = require("../middlewares/employee-validator");

/**
 * CRUD Standard
 */
router.post("/", employeeValidation, employeeController.create);
router.get("/:id", employeeController.getById);
router.put("/:id", employeeController.updateEmployeeById);
router.delete("/:id", employeeController.deleteEmployeeById);

/**
 * Custom Endpoint
 */
router.get("/", employeeController.getAll);

module.exports = router;