import { createStore } from "redux"
import rootReducer from './reducers/index'
import { setLocalStorage } from '../services/localStorage'

const store = createStore(rootReducer)

store.subscribe(() => {
    setLocalStorage('store', store.getState().favoriteReducer)
})

export default store