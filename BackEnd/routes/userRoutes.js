const router = require('express').Router();
const {Login,Signup,getEmp} = require('../controllers/userController');
const checkUser = require('../middlewares/auth')

router.post('/login',Login)
router.post('/signup',Signup)
router.get('/getEmp',checkUser ,getEmp)

module.exports = router;