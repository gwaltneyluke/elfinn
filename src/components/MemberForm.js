function MemberForm({id, member, listMembers, deleteMember, dispatch}) {
  const index = listMembers.findIndex(m => m.id === id);

  const changeMemberName = (e) => dispatch({ type: 'UPDATE MEMBER', memberIndex: index, member: { ...member, memberName: e.target.value } });
  const changeMemberEmail = (e) => dispatch({ type: 'UPDATE MEMBER', memberIndex: index, member: { ...member, email: e.target.value } });
  const changeMemberPhone = (e) => dispatch({ type: 'UPDATE MEMBER', memberIndex: index, member: { ...member, phone: e.target.value } });
  const changeMemberContactPreference = (e) => dispatch({ type: 'UPDATE MEMBER', memberIndex: index, member: { ...member, preferredContact: e.target.value } });
  const addMemberExclusion = (e) => dispatch({ type: 'ADD MEMBER EXCLUSION', memberIndex: index, member });
  const deleteMemberExclusion = (excIdx) => (e) => dispatch({ type: 'DELETE MEMBER EXCLUSION', memberIndex: index, member, exclusionIdx: excIdx });

  return (
    <div key={`member-${id}`}>
      <h4>Member {index+1}</h4>
      
      <div>
        <span>
          <label>Name</label>
          <input type='text' id={`member-${id}-name`} defaultValue={member.memberName} onChange={changeMemberName} />
        </span>
      </div>

      <div>
        <span>
          <label>Email</label>
          <input type='text' id={`member-${id}-email`} defaultValue={member.email} onChange={changeMemberEmail} />
        </span>
      </div>

      <div>
        <span>
          <label>Phone Number</label>
          <input type='text' id={`member-${id}-phone`} defaultValue={member.phone} onChange={changeMemberPhone} />
        </span>
      </div>

      <div>
        <span>
          <label>Send Updates Through:</label>
          <input 
            type='radio' 
            id={`email-member-${id}-form-of-contact`} 
            name={`rb-form-of-contact-${id}`} 
            value='email' 
            defaultChecked={member.preferredContact === 'email'}
            onChange={changeMemberContactPreference}
          />
          <label>Email</label>
          <input 
            type='radio' 
            id={`text-member-${id}-form-of-contact`} 
            name={`rb-form-of-contact-${id}`} 
            value='text' 
            defaultChecked={member.preferredContact === 'text'}
            onChange={changeMemberContactPreference}/>
          <label>Text</label>
        </span>
      </div>

      <div>
        {member.exclusions.map((exclusion, excIdx) => {
          return (
            <div key={`member-${id}-exclusion-${excIdx+1}`}>
              <span>
                <label>Exclude </label>
                <select name={`exclusion-${excIdx+1}`} id={`exclusion-${excIdx+1}`}>
                  {listMembers.filter(mem => mem.id !== member.id).map(mem => {
                      return (<option value={mem.memberName} selected={mem.id === exclusion}>{mem.memberName}</option>);
                  })}
                </select>
                <label> from {member.memberName}'s draw</label>
                <button type='button' onClick={deleteMemberExclusion(excIdx)}>Delete Exclusion</button>
              </span>
            </div>
          )
        })}
        {(member.exclusions.length > 1) || 
          (<button type='button' onClick={addMemberExclusion}>Add Exclusion</button>)
        }
      </div>

      <button type='button' onClick={deleteMember}>Delete Member</button>
    </div>
  );
}

export default MemberForm;