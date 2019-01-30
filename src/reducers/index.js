import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import repos from "./repos";

const rootReducer = combineReducers({
    repos,
    routing: routerReducer
});

export default rootReducer;
