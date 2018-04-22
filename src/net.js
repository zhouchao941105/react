import axios from 'axios'
import { store } from '../src/index'
axios.interceptors.request.use((req) => {
    store.dispatch({
        type: 'LOADING'
    })
    return req
})
axios.interceptors.response.use(res => {
    store.dispatch({ type: 'STOPLOADING' })
    return res
}, err => {
    store.dispatch({ type: 'STOPLOADING' })
    return Promise.reject(err)
})
export default axios