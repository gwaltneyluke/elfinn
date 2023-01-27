import { useState } from 'react';

import MemberForm from './MemberForm';

function ExchangeForm({ exchangeState, dispatch }) {
  const [showPass, setShowPass] = useState(false);

  const changeShowPass = (e) => setShowPass(!showPass);

  const changeName = (e) => dispatch({ type: 'CHANGE EXCHANGE NAME', exchangeName: e.target.value });
  const changePassword = (e) => dispatch({ type: 'CHANGE EXCHANGE PASSWORD', exchangePassword: e.target.value });
  const changeDate = (e) => dispatch({ type: 'CHANGE EXCHANGE DATE', exchangeDate: e.target.value });
  const changeWishList = (e) => dispatch({ type: 'UPDATE SETTINGS', settings: { ...exchangeState.settings, wishList: e.target.value === 'Yes' } });
  const addMember = () => dispatch({ type: 'ADD MEMBER' });
  
  return (
    <div>
      <h3>Exchange Details</h3>

      <div>
        <span>
          <label>Exchange Name</label>
          <input type='text' id='exchange-name' defaultValue={exchangeState.exchangeName} onChange={changeName}/>
        </span>
      </div>

      <div>
        <span>
          <label>Exchange Password</label>
          <input type={showPass ? 'text' : 'password'} id='exchange-password' onChange={changePassword}/>
          <button type='button' onClick={changeShowPass}>{showPass ? 'Hide' : 'Show'}</button>
        </span>
      </div>

      <div>
        <span>
          <label>Date of Exchange</label>
          <input type='date' id='exchange-date' defaultValue={exchangeState.exchangeDate} onChange={changeDate}/>
        </span>
      </div>

      <h3>Settings</h3>

      <div>
        <span>
          <label>Include Wish List?</label>
          <input type='radio' id='yes-wish-list' name='rb-wish-list' defaultChecked={exchangeState.settings.wishList} value='Yes' onChange={changeWishList} />
          <label>Yes</label>
          <input type='radio' id='no-wish-list' name='rb-wish-list' defaultChecked={!exchangeState.settings.wishList} value='No' onChange={changeWishList} />
          <label>No</label>
        </span>
      </div>

      <h3>Members</h3>

      {[...Array(exchangeState.members.length).keys()].map((idx) => {
        const currentMember = exchangeState.members[idx];
        return ( <MemberForm idx={idx} member={currentMember} dispatch={dispatch} />);
      })}

      <span>
        <button type='button' onClick={addMember}>Add Another Member</button>
      </span>
    </div>
  )
};

export default ExchangeForm;