import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Container, Table } from 'react-bootstrap';
function TransactionDetails() {
const URL = process.env.REACT_APP_API_URL;
//ensure that whatever is typed as default in state is the same data type as what you are fetching
const [activity, setActivity] = useState({});
const { index } = useParams();
const navigate = useNavigate();

useEffect(() => {
//make a get request to http://localhost:3001/bookmarks/:index
//use setBookmark to change our current bookmark
//to the data we get back
axios.get(`${URL}/transactions/${index}`)
.then((response) => setActivity(response.data));
}, []);

const handleDelete = () => {
    axios
    .delete(`${URL}/transactions/${index}`)
    .then(() => navigate("/"));
  // redirect them to back to /bookmarks
};

return (
    <article className="details">
      <h3>Transaction Details</h3>
      <p>${activity.amount}</p>
      <h3>Transaction date</h3> 
      <p>{activity.date}</p>
      <h3>Category</h3>
      <p>{activity.category}</p>
      <br />
      <div class="btn-group" role="group" aria-label="Basic example">
        <Link to={'/'}>
          <button type="button" class="btn btn-primary">Back</button>
        </Link>
        <Link to={`/transaction/${index}/edit`}>
          <button type="button" class="btn btn-primary">Edit</button>
        </Link>
        <Link to={'/transaction/${index}/edit'}>
          <button onClick={handleDelete} type="button" class="btn btn-primary">Delete</button>
        </Link>
      </div>
    </article>
  );


};

export default TransactionDetails;