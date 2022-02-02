import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
function Transaction({ element, index }) {
  return (
    <tr>
      <td>
        {element.date}
      </td>
      
      <p>
        <Link to={`/TransactionDetails/${index}`}>{element.name}</Link>
      </p>
      <td>
        <p>{element.amount}</p>
      </td>
      <td>
        <Link to={`/transaction/${index}/edit`}>
          <button type="button" class="btn btn-outline-info">EDIT</button>
        </Link>

      </td>
    </tr>
  );
}

export default Transaction;