import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


function TransactionEdit ()  {
    const URL = process.env.REACT_APP_API_URL;
    const { index } = useParams();
    const navigate = useNavigate();
    //setActivity is the process of storing the fetch into the activity variable which leaves in state
    const [activity, setActivity] = useState({
        item_name:"",
        date:"",
        from:"",
        amount:"",
        category:"",
    });

    useEffect(() => {
        axios.get(`${URL}/transactions/${index}`)
        .then((response) => {
            console.log(response.data)
            setActivity(response.data);
        })
    }, []);
    
    const handleTextChange = (event) => {
        setActivity({...activity, [event.target.id]: event.target.value})
    
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    axios
    .put(`${URL}/transactions/${index}`, activity)
    .then(() => navigate("/"));
    }



        return (
            <form  onSubmit={handleSubmit} className="editItem">

                <div className="date">
                <label htmlFor="date">Date</label>
                <br />
                <input 
                id="date"
                value={activity.date} 
                name="date" 
                type="text" 
                placeholder="date"
                onChange={handleTextChange}
                />
                </div>

                <br />
                <div className="name">
                <label htmlFor="name">Name</label>
                <br />
                <input 
                id="name"
                value={activity.name} 
                name="name" 
                type="text" 
                placeholder="name"
                onChange={handleTextChange}
                />
                </div>

                <br />
                <div className="amount">
                <label htmlFor="amount">Amount</label>
                <br />
                <input 
                id="amount"
                value={activity.amount} 
                name="amount" 
                type="number" 
                placeholder="amount"
                onChange={handleTextChange}
                />
                </div>

                <br />
                <div className="from">
                <label htmlFor="from">From</label>
                <br />
                <input 
                id="from" 
                name="from"
                value={activity.from}
                type="text" 
                placeholder="from"
                onChange={handleTextChange}
                />
                </div>

                <br />
                
                <input type="submit" value="EDIT NEW ITEM" /> 
            
            </form>
        )
    
}


export default TransactionEdit;