const express = require('express');
const router = express.Router(); 
const auth = require("../controller/controller");

router.route('/').get(auth.home);
// router.route('/register').post(auth.register);
// router.route('/register').get(auth.getAllUsers);
router.route('/message').post(auth.message);

module.exports = router;