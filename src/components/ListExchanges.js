import { Link } from "react-router-dom";

function ListExchanges({ ongoingExchanges }) {
  const listOngoing = ongoingExchanges.map((oe, idx) => {
    return (
      <tr key={`ongoing-exchange-${idx}`}>
        <td>
          <Link to={`/update-exchange/${oe.id}`}>
            <button>{oe.exchangeName}</button>
          </Link>
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