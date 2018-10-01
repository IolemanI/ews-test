import _ from 'lodash';
import axios from 'axios';
// import { env } from '../lib/env';

// axios.defaults.baseURL = env.ADMIN_API_URL;

export default {
  getPostById: (id) => axios.get(`/posts/${id}`).then(response => response.data),
  getPostComments: (id) => axios.get(`/posts/${id}/comments`).then(response => response.data),
  // getAllPostComments: () => axios.get(`/posts/comments`).then(response => response.data),
  getPosts: () => {
    return axios.get(`/posts`)
      .then(response => {
        console.info(response.data.length);
        return response.data;
      })
      .catch(err => {
        console.log(`Posts err: \n`,err);
        return null
      })
  },
  getPostsWithParams: (sortBy,limit ) => {
    return axios.get(`/posts?sort=${sortBy}&limit=${limit}&published=true`)
      .then(response => {
        console.info(response.data.length);
        return response.data;
      })
      .catch(err => {
        console.log(`==> api:  Posts with params err :\n`,err)
        return null
      })
  },
  getAuthorById: id => {
    return axios.get(`/employees/${id}`)
      .then(response => response.data)
      .catch( err => null)
  },
  getAuthorsDataOf: (postAuthors) => {
    let requests = _.map( postAuthors, author =>
      axios.get(`/employees/${author._id}`).then(response => response.data)
    );
    return axios.all(requests)
      .catch(err => {
        console.log(`==> api:  getAuthorsDataOf error : `, err)
      })
  },
  getCaseStudies: () => {
    return axios.get('/public/caseStudies?published=true')
      .then(response => response.data)
      .catch(err => null)
  },
  getCaseStudy: (id,fields) => {
    return axios.get(`/public/caseStudies/${id}?fields=${fields||''}`)
      .then(response => response.data)
      .catch(err => null)
  },
  setCaseStudyRating: (id,rating) => {
    return axios.put(`/casestudies/${id}?rating=${rating||''}`)
      .then(response => {
        return response.data;
      })
      .catch(err => null)
  },
  setBlogPostRating: (id,rating) => {
    return axios.put(`/posts/${id}?rating=${rating||''}`)
      .then(response => {
        return response.data;
      })
      .catch(err => null)
  },
  getReviews: () => {
    return axios.get('/public/reviews')
      .then(response => response.data)
      .catch(err => null)
  },
  getEmployees: () => {
    return axios.get('/employees?published=true')
      .then(response => response.data)
      .catch(err => null)
  },
  getVacancies: () => {
    return axios.get('/public/vacancies')
      .then(response => {
        console.log(`==> api:  fetched ${response.data.length} vacancies `);
        return response.data
      })
      .catch(err => null)
  },
  getVacancy: (id,fields) => {
    return axios.get(`/public/vacancies/${id}?fields=${fields||''}`)
      .then(response => response.data)
      .catch(err => null)
  },
  getManagers: () => {
    return axios.get('/employees?isSaleManager=true')
      .then(response => response.data)
      .catch(err => null)
  },
  getRecruiters: () => {
    return axios.get('/employees?isRecruter=true')
      .then(response => response.data)
      .catch(err => null)
  }
}
