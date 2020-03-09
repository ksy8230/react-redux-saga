const { createStore, compose, applyMiddleware } = require('redux');
const { composeWithDevTools } = require('redux-devtools-extension');
import reducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const initialState = {
    posts : {
        mainProblemLists : [],
        similarProblemLists : [],
        similarProblemListsAdded : false,
        loadProblemListsErrorReason : '',
    }
};

const firstMiddleware = (store) => (dispatch) => (action) => {
    console.log('action logging...',action);
    dispatch(action);
};

const sagaMiddleware = createSagaMiddleware();
const enhancer = composeWithDevTools(
        applyMiddleware(firstMiddleware, sagaMiddleware)
    );
    
const store = createStore(reducer, initialState, enhancer); 
store.sagaTask = sagaMiddleware.run(rootSaga);

export default store;