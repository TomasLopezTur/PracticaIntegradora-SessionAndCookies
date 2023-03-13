const router = require('express').Router();
const {index, user, not_entry, userProcess, resert} = require('../controllers/mainController');
const registerValidator = require ('../validations/registerValidator');
const userInSession = require ('../middleware/userInSession')
router
    .get('/', index)
    .post('/', registerValidator,  userProcess)
    .get('/user', userInSession, user)
    .get('/user/reset', userInSession, resert)
    .get('/not-entry', not_entry)

module.exports = router;