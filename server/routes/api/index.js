const router = require('express').Router();

/*---------------*/
/* Import - Used */
/*---------------*/
const categoryRoutes = require('./category');
const referralRoutes = require('./referral_code');


/*------------------*/
/* Route - Used */
/*------------------*/

// category routes
router.use('/category', categoryRoutes);
router.use('/referral_code', referralRoutes);


module.exports = router;