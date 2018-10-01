import * as axios from 'axios'

let options = {}

options.baseURL = process.env.HOST_URL

export default axios.create(options)
