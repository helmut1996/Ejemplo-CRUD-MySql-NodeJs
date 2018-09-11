const express = require('express');
const router = express.Router();
const controllers= require('../controllers/controllers');

router.get('/',controllers.list);
router.post('/add',controllers.save);
router.get('/delate/:id',controllers.delate);

router.get('/editar/:id',controllers.edit);
router.post('/editar/:id',controllers.update);
module.exports = router;