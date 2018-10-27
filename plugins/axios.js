import * as axios from 'axios'

let options = {}

// axios.defaults.baseURL = process.env.CMS_API_URL
// axios.defaults.baseURL = process.env.HOST_URL

export default axios.create(options)
