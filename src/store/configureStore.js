import { createStore, applyMiddleware, compose } from 'redux';
import userDetailsReducer from '../reducers/userDetailsReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/rootSaga';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        userDetailsReducer,
        composeEnhancers(applyMiddleware(sagaMiddleware))
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    // run the saga
    sagaMiddleware.run(rootSaga);

    return store;
};

