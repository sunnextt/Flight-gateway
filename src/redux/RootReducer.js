import { combineReducers } from 'redux';
import searchReducer from './reducers/search/searchReducer'

export const rootReducer = combineReducers({
search: searchReducer
});