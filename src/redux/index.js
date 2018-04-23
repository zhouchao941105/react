import { createStore } from 'redux'
function reducer(state, action) {
    switch (action.type) {
        case 'LOADING':
            return {
                loading: true
            }
        case 'STOPLOADING':
            return {
                loading: false
            }
        case 'SEARCH':
            return {
                searchVal: action.key,
            }
        case 'NAVCHANGE':
            return {
                current: action.current
            }
        default: return state
    }
}
const store = createStore(reducer)
export default store