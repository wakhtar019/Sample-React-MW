import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {reducers} from './combineReducers';
import { initialState } from './initialState';
import { initSagas } from './initSagas';
import { composeWithDevTools } from 'redux-devtools-extension';

// export const getStore = () => {
//     const sagaMiddleware = createSagaMiddleware();
//     const store = createStore(
//         reducers,
//         initialState,
//         applyMiddleware(sagaMiddleware),
//     );
//     initSagas(sagaMiddleware);
//     return store;
// };
export const getStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    // const params = {
    //     globals: {
    //         env: 'dev'
    //     },
    //     exclude: ['trackAction']
    // };


    //const middleWares = [insightsMonitor(params), app_initialize,...PricingMiddlewares, sagaMiddleware];
    //if (getQuery['logger']) { middleWares.push(logger)}
    const composables = [applyMiddleware(sagaMiddleware)
    ];

    var enhancer = undefined;

    if (process.env.NODE_ENV === 'prod' || process.env.NODE_ENV === 'production') {
        enhancer = compose(
            ...composables
        );
    }
    else {
        enhancer = composeWithDevTools(...composables);
    }
    const store = createStore(
        reducers,
        initialState,
        enhancer,
    );
    initSagas(sagaMiddleware);
    return store;
};