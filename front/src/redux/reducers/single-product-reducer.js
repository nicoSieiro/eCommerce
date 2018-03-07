import { RECEIVE_SINGLE_PRODUCT } from '../constants';

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
      case RECEIVE_SINGLE_PRODUCT:
          return action.product
      default:
          return state;
  }
}