import { combineReducers } from 'redux';
import shoppingReducer from './shopping/shopping-reducer'
const rootereducers = combineReducers({
    shop: shoppingReducer
})
export default rootereducers;