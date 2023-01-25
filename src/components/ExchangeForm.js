function ExchangeForm({ exchangeState, dispatch }) {
  const changeName = (e) => dispatch({ type: 'CHANGE EXCHANGE NAME', exchangeName: e.target.value });
  const changeDate = (e) => dispatch({ type: 'CHANGE EXCHANGE DATE', exchangeDate: e.target.value });
  const changeWishList = (e) => dispatch({ type: 'UPDATE SETTINGS', settings: { ...exchangeState.settings, wishList: e.target.value === 'Yes' } });
  const addMember = () => dispatch({ type: 'ADD MEMBER' });
  const deleteMember = (idx) => (e) => dispatch({ type: 'DELETE MEMBER', memberIndex: idx });
  const changeMemberName = (idx, current) => (e) => dispatch({ type: 'UPDATE MEMBER', memberIndex: idx, member: { ...current, memberName: e.target.value } });
  const changeMemberEmail = (idx, current) => (e) => dispatch({ type: 'UPDATE MEMBER', memberIndex: idx, member: { ...current, email: e.target.value } });
  const changeMemberPhone = (idx, current) => (e) => dispatch({ type: 'UPDATE MEMBER', memberIndex: idx, member: { ...current, phone: e.target.value } });
  const changeMemberContactPreference = (idx, current) => (e) => dispatch({ type: 'UPDATE MEMBER', memberIndex: idx, member: { ...current, preferredContact: e.target.value } });

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
        return (
          <div key={`member-${idx+1}`}>
            <h4>Member {idx+1}</h4>
            
            <div>
              <span>
                <label>Name</label>
                <input type='text' id={`member-${idx+1}-name`} defaultValue={currentMember.memberName} onChange={changeMemberName(idx, currentMember)} />
              </span>
            </div>

            <div>
              <span>
                <label>Email</label>
                <input type='text' id={`member-${idx+1}-email`} defaultValue={currentMember.email} onChange={changeMemberEmail(idx, currentMember)} />
              </span>
            </div>

            <div>
              <span>
                <label>Phone Number</label>
                <input type='text' id={`member-${idx+1}-phone`} defaultValue={currentMember.phone} onChange={changeMemberPhone(idx, currentMember)} />
              </span>
            </div>

            <div>
              <span>
                <label>Send Updates Through:</label>
                <input 
                  type='radio' 
                  id={`email-member-${idx+1}-form-of-contact`} 
                  name={`rb-form-of-contact-${idx+1}`} 
                  value='email' 
                  defaultChecked={currentMember.preferredContact === 'email'}
                  onChange={changeMemberContactPreference(idx, currentMember)}
                />
                <label>Email</label>
                <input 
                  type='radio' 
                  id={`text-member-${idx+1}-form-of-contact`} 
                  name={`rb-form-of-contact-${idx+1}`} 
                  value='text' 
                  defaultChecked={currentMember.preferredContact === 'text'}
                  onChange={changeMemberContactPreference(idx, currentMember)}/>
                <label>Text</label>
              </span>
            </div>

            <button type='button' onClick={deleteMember(idx)}>Delete Member</button>
          </div>
        );
      })}

      <span>
        <button type='button' onClick={addMember}>Add Another Member</button>
      </span>
    </div>
  )
};

export default ExchangeForm;