import {createStore,combineReducers,applyMiddleware} from 'redux'
import { productReducer, selectedProductReducer } from './Reducers'
import {composeWithDevTools} from 'redux-devtools-extension'

const reducers=combineReducers({
    allProducts:productReducer,
    product:selectedProductReducer
})

const Store=createStore(
    reducers,
    composeWithDevTools(applyMiddleware())
)

export default Store;