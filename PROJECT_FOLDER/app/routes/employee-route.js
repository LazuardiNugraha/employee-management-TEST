const router = require("express").Router();
const employeeController = require("../controllers/employee-controller");
const { employeeValidation } = require("../middlewares/employee-validator");

router.post("/", employeeValidation, employeeController.create);
router.get("/:id", employeeController.getById);
router.put("/:id", employeeController.updateEmployeeById);
router.delete("/:id", employeeController.deleteEmployeeById);

module.exports = router;