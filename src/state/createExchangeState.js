import { DateTime } from 'luxon';
import { v4 as uuidv4 } from 'uuid';

const initialMemberState = {
  memberName: '',
  email: '',
  phone: '',
  preferredContact: 'email',
  exclusions: []
};

const initialExchangeState = {
  exchangeName: '',
  drawDate: DateTime.now().toFormat('yyyy-MM-dd'),
  exchangeDate: DateTime.fromObject({ month: 12, day: 25 }).toFormat('yyyy-MM-dd'),
  settings: {
    wishList: true,
    numberOfDraws: 1
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
    case 'CHANGE DRAW DATE':
      console.log(`change draw date ${action.drawDate}`);
      return {
        ...state,
        drawDate: action.drawDate
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
            ...action.member
          },
          ...state.members.slice(action.memberIndex+1)
        ]
      }
    case 'ADD MEMBER EXCLUSION':
      console.log(`add member exclusion: ${action.memberIndex}`);
      return {
        ...state,
        members: [
          ...state.members.slice(0, action.memberIndex),
          {
            ...action.member,
            exclusions: [
              ...state.members[action.memberIndex].exclusions,
              ''
            ]
          },
          ...state.members.slice(action.memberIndex+1)
        ]
      }
      case 'DELETE MEMBER EXCLUSION':
        console.log(`delete member exclusion: ${action.memberIndex} ${action.exclusionIdx}`);
        return {
          ...state,
          members: [
            ...state.members.slice(0, action.memberIndex),
            {
              ...action.member,
              exclusions: [
                ...state.members[action.memberIndex].exclusions.slice(0, action.exclusionIdx),
                ...state.members[action.memberIndex].exclusions.slice(action.exclusionIdx+1)
              ]
            },
            ...state.members.slice(action.memberIndex+1)
          ]
        }
    default:
      return {
        ...state
      };
  }
}

export {
  initialExchangeState,
  reducer
}