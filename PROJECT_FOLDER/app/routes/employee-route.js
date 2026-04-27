const router = require("express").Router();
const employeeController = require("../controllers/employee-controller");
const { employeeValidation } = require("../middlewares/employee-validator");

/**
 * Custom Endpoint
 */
router.get("/", employeeController.getAll);
router.get("/report", employeeController.getEmployeeReport);
router.post("/with-relation", employeeController.createEmployeeWithRelation);
router.put("/:id/with-relation", employeeController.updateEmployeeWithRelation);

/**
 * CRUD Standard
 */
router.post("/", employeeValidation, employeeController.create);
router.get("/:id", employeeController.getById);
router.put("/:id", employeeController.updateEmployeeById);
router.delete("/:id", employeeController.deleteEmployeeById);

module.exports = router;