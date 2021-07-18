import { createStore } from 'redux';
import rootereducers from './rootereducer'
import { composeWithDevTools } from 'redux-devtools-extension'
const store = createStore(rootereducers)
export default store;