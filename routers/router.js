const express = require('express');
const controller = require('./../controllers/controller');
const crudController=require('./../controllers/crudControoller')

const router = express.Router();

// router.route('/postdata')
//     .post(controller.create_bio_data);
// router.route('/getdata').get(controller.read_data);
// // router.route('/data/:id')
//     .delete(controller.delete_data)
//     .patch(controller.Update_data)

// router.route('/aggregate').get(controller.getAggregationState);


router.route('/createdata').post(crudController.create_data);
router.route('/readData').get(crudController.read_data);
router.route('/updatedata/:id').patch(crudController.Update_data);
router.route('/delete/:id').delete(crudController.delete_data);
router.route('/getdata/:id').get(crudController.get_data);

module.exports = router;