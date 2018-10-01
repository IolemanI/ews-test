const { Router } = require('express')
const {getCaseStudies} = require('../controllers/index')
const router = Router()

/* GET client info */
router.get('/case-studies', getCaseStudies)

module.exports = router
