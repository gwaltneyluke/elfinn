function ListExchanges({ ongoingExchanges }) {

  const listOngoing = ongoingExchanges.map((oe, idx) => {
    return (
      <tr key={`ongoing-exchange-${idx}`}>
        <td>
          <button>{oe.exchangeName}</button>
        </td>
      </tr>
    );
  });

  return (
    <div className="ListExchanges">
      {ongoingExchanges && ongoingExchanges.length > 0 ?
        <div>
          <h3>List of Ongoing Exchanges</h3>
          <table>
            <tbody>
              {listOngoing}
            </tbody>
          </table>
        </div> :
        <h1>No Ongoing Exchanges</h1>
      }
    </div>
  );
}

export default ListExchanges;