import {createStore, combineReducers} from 'redux';
import inventory from './inventory';

const rootReducer = combineReducers({
  inventory,
});

export const store = createStore(rootReducer);
