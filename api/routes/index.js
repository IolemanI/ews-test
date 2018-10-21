const { Router } = require('express')
const {getCaseStudies, getReviews} = require('../controllers/index')
const router = Router()

router.get('/case-studies', getCaseStudies)
router.get('/reviews', getReviews)

module.exports = router
