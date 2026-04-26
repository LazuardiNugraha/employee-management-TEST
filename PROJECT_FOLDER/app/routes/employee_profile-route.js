const router = require("express").Router();
const employeeProfileController = require("../controllers/employee_profile-controller");

router.post("/", employeeProfileController.create);
router.get("/:id", employeeProfileController.getById);
router.put("/:id", employeeProfileController.updateEmployeeProfileById);
router.delete("/:id", employeeProfileController.deleteEmployeProfileById);

module.exports = router;