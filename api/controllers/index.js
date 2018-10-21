const axios = require('axios')

/**
 *  GET /api/case-studies
 * */
let getCaseStudies = async (req, res, next) => {
  await axios.get('http://localhost:4000/api/public/caseStudies?published=true')
    .then(response => res.send(response.data))
    .catch(err => null)
}
/**
 *  GET /api/reviews
 * */
let getReviews = async (req, res, next) => {
  await axios.get('http://localhost:4000/api/public/reviews')
    .then(response => res.send(response.data))
    .catch(err => null)
}
/**
 *  GET /api/blog-posts
 * */
let getBlogPosts = async (req, res, next) => {
  await axios.get('http://localhost:4000/api/posts')
    .then(response => res.send(response.data))
    .catch(err => null)
}

module.exports = {getCaseStudies, getReviews, getBlogPosts};
