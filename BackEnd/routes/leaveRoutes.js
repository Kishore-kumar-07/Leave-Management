const router = require('express').Router();
const {applyLeave,approved,denied,getLeaves} = require('../controllers/leaveController');
const checkUser = require('../middlewares/auth')

router.post('/apply',applyLeave)
router.post('/approve',approved)
router.post('/deny',denied)
router.get('/getLeaves', checkUser, getLeaves)

module.exports = router;