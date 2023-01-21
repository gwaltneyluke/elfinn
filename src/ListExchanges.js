function ListExchanges({ ongoingExchanges }) {
  return (
    <div className="ListExchanges">
      {ongoingExchanges && ongoingExchanges.length > 0 ?
        <div>
          <h3>List of Ongoing Exchanges</h3>
          <table>
            <tbody>
              {ongoingExchanges.forEach((oe, idx) => {
                <td key={`ongoing-exchange-${idx}`}>
                  <tr>
                    <button>{oe.exchangeName}</button>
                  </tr>
                </td>
              })}
            </tbody>
          </table>
        </div> :
        <h1>No Ongoing Exchanges</h1>
      }
    </div>
  );
}

export default ListExchanges;