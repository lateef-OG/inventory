import {inventoryData} from '../utils/data';

const ADD_ITEM = 'ADD_ITEM';

const initialState = {
  items: inventoryData,
};

const inventoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    default:
      return state;
  }
};

export const addItem = item => {
  return {
    type: ADD_ITEM,
    payload: item,
  };
};

export default inventoryReducer;
