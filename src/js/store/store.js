import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers/reducers'
import fetchInstructions from '../middleware/fetchInstructions'
import fetchQuestions from '../middleware/fetchQuestions';
import { composeWithDevTools } from 'redux-devtools-extension'
import computeResults from '../middleware/computeResults';

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store=createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(fetchInstructions,fetchQuestions,computeResults))
);
export default store