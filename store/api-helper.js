import axios from 'axios'

export async function getCaseStudies() {
  return await axios.get('/api/case-studies').then(res => res.data)
}
export async function getReviews() {
  return await axios.get('/api/reviews').then(res => {
    console.log('reviews res.data', res.data)
  })
}
