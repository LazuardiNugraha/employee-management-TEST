const router = require('express').Router();
const educationController = require('../controllers/education-controller');

router.post('/', educationController.create);
router.get('/:id', educationController.getById);
router.put('/:id', educationController.updateEducationById);
router.delete('/:id', educationController.deleteEducationById);

module.exports = router;
