import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import userReducer from '../reducers/userReducer'
import booksReducer from '../reducers/booksReducer'


const configureStore = () => {
    const store = createStore(combineReducers({
        user: userReducer,
        books: booksReducer,
        
    }), applyMiddleware(thunk))
    return store
}

export default configureStore