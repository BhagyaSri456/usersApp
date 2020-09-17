// import { createStore} from 'redux';
// import Reducer from '../reducers/Reducer';

// import thunk from 'redux-thunk';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export default () => {
//     const store = createStore(
//         Reducer,
//         // composeEnhancers(applyMiddleware(thunk))
//         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     );

//     return store;
// };
import { createStore, applyMiddleware, compose } from 'redux';
import userDetails from '../reducers/userDetails';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        userDetails,
        composeEnhancers(applyMiddleware(thunk))
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
};

