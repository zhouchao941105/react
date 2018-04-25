import { createStore } from 'redux'
function reducer(state, action) {
    switch (action.type) {
        case 'LOADING':
            return {
                ...state,
                loading: true
            }
        case 'STOPLOADING':
            return {
                ...state,
                loading: false
            }
        case 'SEARCH':
            return {
                ...state,
                searchVal: action.key,
            }
        case 'NAVCHANGE':
            return {
                ...state,
                current: action.current
            }
        default: return state
    }
}
const store = createStore(reducer)
export default store