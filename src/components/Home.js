import { useEffect, useState } from "react";
import axios from "axios";
import Transaction from "./Transaction";

function Home () {
    const URL = process.env.REACT_APP_API_URL;
    const [activity, setActivity] = useState([]);
    

    useEffect(() => {
        axios
        .get(`${URL}/transactions`)
        .then((response) => {
            console.log(response.data);
            setActivity(response.data);

        })
    }, []);

    let balance = 0;
    activity.forEach(element => balance = balance + Number(element.amount))

        return (
            <div className="balance">
                <span>
                    <h2>Account Balance</h2>
                    <h3>${balance}</h3>
                </span>
                    <table>
                        <tbody>
                            {activity.map((element, index) => {
                            return <Transaction key={index} element={element} index={index} /> })}
                        </tbody>
                    </table>

            </div>
        )
    
}

export default Home;