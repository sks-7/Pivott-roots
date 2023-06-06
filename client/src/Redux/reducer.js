import * as types from './actionTypes';

const initialState = {
  users: [],
  singleUsers: {},
  orders: [],
  singleOrders: {},
  loading: true,
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USER:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };

    case types.GET_ORDER:
      return {
        ...state,
        orders: action.payload,
        loading: false,
      };

    case types.DELETE_USER:
    case types.ADD_USER:
    case types.UPDATE_USER:
    case types.DELETE_ORDER:
    case types.ADD_ORDER:
    case types.UPDATE_ORDER:
      return {
        ...state,
        loading: false,
      };

    case types.GET_SINGLE_USER:
      return {
        ...state,
        singleUsers: action.payload,
        loading: false,
      };

    case types.GET_SINGLE_ORDER:
      return {
        ...state,
        singleOrders: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducers;
