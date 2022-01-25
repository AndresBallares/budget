import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

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
      <p>`${activity.amount}'</p>
      <h3>
        <span>
          <p>Transaction date</p> 
        </span>{" "}
        {activity.date}
      </h3>
      <h3>Category</h3>
      <p>{activity.category}</p>
      <div className="showNavigation">
        <div>
          {" "}
          <Link to={`/`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          {" "}
          <Link to={`/transaction/${index}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          {" "}
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </article>
  );


};

export default TransactionDetails;