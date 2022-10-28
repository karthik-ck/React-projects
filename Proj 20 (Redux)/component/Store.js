import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { isLogged, Reducer } from './Reducer'
import {composeWithDevTools} from 'redux-devtools-extension'

const reducer=combineReducers({
    isLogged:isLogged,
    counter:Reducer
})
const middleware=[thunk]
const Store=createStore(
   reducer,
   composeWithDevTools(applyMiddleware(...middleware))
)

export default Store