import { v4 as uuidv4 } from 'uuid';

const initialAppState = {
  userExchanges: []
};

function reducer(state, action) {
  switch (action.type) {
    case 'ADD EXCHANGE':
      return {
        ...state,
        userExchanges: [
          ...state.userExchanges,
          {
            id: uuidv4(),
            ...action.exchange
          }
        ]
      };
    case 'EDIT EXCHANGE':
      return {
        ...state,
        userExchanges: [
          ...state.userExchanges.slice(0, action.idx),
          action.exchange,
          ...state.userExchanges.slice(action.idx+1)
        ]
      }
    default:
      return state;
  };
};

export {
  initialAppState,
  reducer
};