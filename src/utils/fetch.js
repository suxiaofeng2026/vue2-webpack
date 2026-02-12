import axios from 'axios'
const fetch = {
  async post (url, params) {
    return axios.post(url, params)
  },
  async get (url, params) {
    return axios.get(url, params)
  }
}
export default fetch
