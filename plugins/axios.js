import * as axios from 'axios'

let options = {}

axios.defaults.baseURL = process.env.CMS_API_URL

export default axios.create(options)
