function MemberForm({idx, member, dispatch}) {
  const deleteMember = (idx) => (e) => dispatch({ type: 'DELETE MEMBER', memberIndex: idx });
  const changeMemberName = (idx, current) => (e) => dispatch({ type: 'UPDATE MEMBER', memberIndex: idx, member: { ...current, memberName: e.target.value } });
  const changeMemberEmail = (idx, current) => (e) => dispatch({ type: 'UPDATE MEMBER', memberIndex: idx, member: { ...current, email: e.target.value } });
  const changeMemberPhone = (idx, current) => (e) => dispatch({ type: 'UPDATE MEMBER', memberIndex: idx, member: { ...current, phone: e.target.value } });
  const changeMemberContactPreference = (idx, current) => (e) => dispatch({ type: 'UPDATE MEMBER', memberIndex: idx, member: { ...current, preferredContact: e.target.value } });

  return (
    <div key={`member-${idx+1}`}>
      <h4>Member {idx+1}</h4>
      
      <div>
        <span>
          <label>Name</label>
          <input type='text' id={`member-${idx+1}-name`} defaultValue={member.memberName} onChange={changeMemberName(idx, member)} />
        </span>
      </div>

      <div>
        <span>
          <label>Email</label>
          <input type='text' id={`member-${idx+1}-email`} defaultValue={member.email} onChange={changeMemberEmail(idx, member)} />
        </span>
      </div>

      <div>
        <span>
          <label>Phone Number</label>
          <input type='text' id={`member-${idx+1}-phone`} defaultValue={member.phone} onChange={changeMemberPhone(idx, member)} />
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
            defaultChecked={member.preferredContact === 'email'}
            onChange={changeMemberContactPreference(idx, member)}
          />
          <label>Email</label>
          <input 
            type='radio' 
            id={`text-member-${idx+1}-form-of-contact`} 
            name={`rb-form-of-contact-${idx+1}`} 
            value='text' 
            defaultChecked={member.preferredContact === 'text'}
            onChange={changeMemberContactPreference(idx, member)}/>
          <label>Text</label>
        </span>
      </div>

      <button type='button' onClick={deleteMember(idx)}>Delete Member</button>
    </div>
  );
}

export default MemberForm;