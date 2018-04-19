import axios from 'axios'
// axios.interceptors.request.use(() => {

// })
axios.interceptors.response.use(res => {
    return res
}, err => {
    return Promise.reject(err)
})
export default axios