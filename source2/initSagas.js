import * as CommonSagas from './app/common/sagas';
import * as ModuleSagas from './app/module/sagas';


const sagas = {...CommonSagas,...ModuleSagas};

export const initSagas = (sagaMiddleware) =>{
    Object.values(sagas).forEach(sagaMiddleware.run.bind(sagaMiddleware));
}