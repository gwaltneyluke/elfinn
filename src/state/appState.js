import { v4 as uuidv4 } from 'uuid';

const initialAppState = {
  userExchanges: []
};

function reducer(state, action) {
  switch (action.type) {
    case 'ADD USER EXCHANGE':
      return {
        ...state,
        userExchanges: [
          ...state.userExchanges,
          {
            id: uuidv4(),
            ...action.newUserExchange
          }
        ]
      };
  };
};

export {
  initialAppState,
  reducer
};