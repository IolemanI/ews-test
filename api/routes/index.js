const { Router } = require('express')
const {getCaseStudies, getReviews, getBlogPosts} = require('../controllers/index')
const router = Router()

router.get('/case-studies', getCaseStudies)
router.get('/reviews', getReviews)
router.get('/blog-posts', getBlogPosts)

module.exports = router
