import * as ActionType from '../../../Redux/ActionType';

const initialState = { };

export default (state = initialState, payload) => {

  switch (payload.type) {
  case ActionType.LOAD_SHOP:
    // console.log('===>payload',payload);
    return {
      ...state,
      list: payload.data.list
    };
  case ActionType.EXCHANGE_SHOP:
    console.log('===>payload',payload);
    return {
      ...state,
      id: payload.data
    };
  default:
    return state;
  }
};