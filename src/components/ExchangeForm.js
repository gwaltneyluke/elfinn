import MemberForm from './MemberForm';

function ExchangeForm({ exchangeState, dispatch }) {
  const changeName = (e) => dispatch({ type: 'CHANGE EXCHANGE NAME', exchangeName: e.target.value });
  const changeDrawDate = (e) => dispatch({ type: 'CHANGE DRAW DATE', drawDate: e.target.value });
  const changeExchangeDate = (e) => dispatch({ type: 'CHANGE EXCHANGE DATE', exchangeDate: e.target.value });
  const changeWishList = (e) => dispatch({ type: 'UPDATE SETTINGS', settings: { ...exchangeState.settings, wishList: e.target.value === 'Yes' } });
  const changeNumDraws = (e) => dispatch({ type: 'UPDATE SETTINGS', settings: { ...exchangeState.settings, numberOfDraws: e.target.value } });
  const addMember = () =>  dispatch({ type: 'ADD MEMBER' });
  const deleteMember = (idx) => () => dispatch({ type: 'DELETE MEMBER', memberIndex: idx });
  
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
          <label>Date of Name Draw</label>
          <input type='date' id='exchange-date' defaultValue={exchangeState.drawDate} onChange={changeDrawDate}/>
        </span>
      </div>

      <div>
        <span>
          <label>Date of Exchange</label>
          <input type='date' id='exchange-date' defaultValue={exchangeState.exchangeDate} onChange={changeExchangeDate}/>
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

      <div>
        <span>
          <label>Names Drawn / Member</label>
          <input type='number' id='num-names-drawn' defaultValue={exchangeState.settings.numberOfDraws} onChange={changeNumDraws} />
        </span>
      </div>

      <h3>Members</h3>

      {[...Array(exchangeState.members.length).keys()].map((idx) => {
        const currentMember = exchangeState.members[idx];
        const id = currentMember.id;
        return ( <MemberForm key={id} id={id} member={currentMember} listMembers={exchangeState.members} deleteMember={deleteMember(idx)} dispatch={dispatch} />);
      })}

      <span>
        <button type='button' onClick={addMember}>Add Another Member</button>
      </span>
    </div>
  )
};

export default ExchangeForm;