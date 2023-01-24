import { DateTime } from 'luxon';
import { v4 as uuidv4 } from 'uuid';

const initialMemberState = {
  memberName: '',
  email: '',
  phone: '',
  preferredContact: 'email'
};

const initialExchangeState = {
  exchangeName: '',
  exchangeDate: DateTime.now().toFormat('yyyy-MM-dd'),
  settings: {
    wishList: true
  },
  members: [
    {
      id: uuidv4(),
      ...initialMemberState
    },
    {
      id: uuidv4(),
      ...initialMemberState
    }
  ]
};

function reducer(state, action) {
  switch (action.type) {
    case 'ADD MEMBER':
      console.log('add member')
      return {
        ...state,
        members: [
          ...state.members,
          {
            id: uuidv4(),
            ...initialMemberState
          }
        ]
      }
    case 'DELETE MEMBER':
      console.log(`delete member ${action.memberIndex}`);
      return {
        ...state,
        members: [
          ...state.members.slice(0, action.memberIndex),
          ...state.members.slice(action.memberIndex+1)
        ]
      }
    case 'CHANGE EXCHANGE NAME':
      console.log(`change name ${action.exchangeName}`);
      return {
        ...state,
        exchangeName: action.exchangeName
      }
    case 'CHANGE EXCHANGE DATE':
      console.log(`change date ${action.exchangeDate}`);
      return {
        ...state,
        exchangeDate: action.exchangeDate
      }
    case 'UPDATE SETTINGS':
      console.log(`update settings ${JSON.stringify(action.settings)}`);
      return {
        ...state,
        settings: action.settings
      }
    case 'UPDATE MEMBER':
      console.log(`update member: ${action.memberIndex}: ${JSON.stringify(action.member)}`);
      return {
        ...state,
        members: [
          ...state.members.slice(0, action.memberIndex),
          {
            id: uuidv4(),
            ...action.member
          },
          ...state.members.slice(action.memberIndex+1)
        ]
      }
  }
}

export {
  initialExchangeState,
  reducer
}