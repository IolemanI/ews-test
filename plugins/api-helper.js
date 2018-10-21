import axios from './axios'

export async function getCaseStudies() {
  return await axios.get('/api/case-studies').then(res => res.data)
}
export async function getReviews() {
  return await axios.get('/api/reviews').then(res => res.data)
}
export async function getBlogPosts() {
  return await axios.get('/api/blog-posts').then(res => res.data)
}
