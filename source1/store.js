import { createStore, combineReducers, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";
import { reducer as formReducer } from 'redux-form'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'




const reducerers = {
    rootReducer,
    // this will be used for form reducer to store the data in the store
    form:formReducer
   
}


const reducer = combineReducers(reducerers)
const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer,  
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga)
export default store;