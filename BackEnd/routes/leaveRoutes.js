const router = require('express').Router();
const {applyLeave,approved,denied,getLeaves,getLeaveByUser} = require('../controllers/leaveController');
const checkUser = require('../middlewares/auth')

router.post('/apply',applyLeave)
router.post('/approve',approved)
router.post('/deny',denied)
router.get('/getLeaves', checkUser, getLeaves)
router.get('/getLeaveByUser', checkUser, getLeaveByUser)

module.exports = router;