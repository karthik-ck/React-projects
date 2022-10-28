import {createStore,combineReducers,applyMiddleware,compose} from 'redux'
import { productReducer, selectedProductReducer } from './Reducers'
import thunk from 'redux-thunk'

export const reducers=combineReducers({
    allProduct:productReducer,
    product:selectedProductReducer
})

const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose;

const Store=createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
)

export default Store