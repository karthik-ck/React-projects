import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { TodoReducer } from './TodoReducer';

const reducer=combineReducers({
   Todo:TodoReducer
});

const initialState={};

const middleware=[thunk]

const Store=createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default Store