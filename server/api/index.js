const axios = require('axios')

async function getCaseStudies() {
  return await axios.get('http://localhost:4000/api/public/caseStudies?published=true').then(res => res.data)
}
async function getReviews() {
  return await axios.get('http://localhost:4000/api/public/reviews').then(res => res.data)
}
async function getBlogPosts() {
  return await axios.get('http://localhost:4000/api/posts').then(res => res.data)
}

module.exports = {getCaseStudies, getReviews, getBlogPosts};


