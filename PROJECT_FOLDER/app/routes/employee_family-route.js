const router = require("express").Router();
const employeeFamilyController = require("../controllers/employee_family-controller");

router.post("/", employeeFamilyController.create);
router.get("/:id", employeeFamilyController.getById);
router.put("/:id", employeeFamilyController.updateEmployeeFamilyById);
router.delete("/:id", employeeFamilyController.deleteEmployeeFamilyById);

module.exports = router;