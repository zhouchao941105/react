import axios from 'axios'
axios.interceptors.response.use(res => {
    debugger
    return res
}, err => {
    return Promise.reject(err)
})
export default axios