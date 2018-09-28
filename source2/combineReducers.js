import { combineReducers } from 'redux';
import * as CommonReducers from './app/common/reducers';
import * as ModuleReducers from './app/module/reducers';
import {fromJS} from 'immutable';

const reducerList = {...CommonReducers,...ModuleReducers};

export const combineAppReducers = (config) => {
    const defaultState = fromJS(Object.keys(config).reduce((a, key) => { a[key] = config[key](undefined, []); return a }, {}));
    return (state = defaultState, action) => {
        return Object.keys(config).reduce((state, key) => {
            const reducer = config[key];
            const previousState = state.get(key);
            const newValue = reducer(previousState, action);
            if (newValue === undefined) {
                throw new Error(`A reducer returned undefined when reducing key::"${key}"`);
            }
            return state.set(key, newValue);
        }, state);
    };
}

export const reducers = combineReducers({
    app: combineAppReducers(reducerList),
});
