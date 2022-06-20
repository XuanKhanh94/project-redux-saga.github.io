import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga)

export default store;