import { Link } from "react-router-dom";

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
    </tr>
  );
}

export default Transaction;