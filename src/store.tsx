import createSagaMiddleware from 'redux-saga';
import { rootSaga, rootReducer } from 'saga-slice';
import { configureStore } from '@reduxjs/toolkit';

import ExcerciseSaga from './sagas/excercise.saga';

const modules = [
    ExcerciseSaga
];

const sagaMiddleware = createSagaMiddleware();

const appReducer = rootReducer(modules);

const store = configureStore({
    reducer: appReducer,
    middleware: [
        sagaMiddleware
    ]
});

sagaMiddleware.run(rootSaga(modules));

export default store;