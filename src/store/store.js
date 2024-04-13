import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { mainReducer } from './mainReducer';
import { mainSaga } from './mainSaga';


const sagaMiddleware = createSagaMiddleware();

const store = createStore(mainReducer, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(mainSaga)

export default store;