import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import NewItem from './components/NewItem';
import TransactionDetails from './components/TransactionDetails';
import TransactionEdit from './components/TransactionEdit';
import "./components/Nav.css";
import "./components/Home.css";
import "./components/NewItem.css";
import "./components/TransactionDetails";

function App() {
    return (
    <div className='App'>
        
            <Nav />
            <main className='body'>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/NewItem" element={<NewItem />} />
                    <Route path="/TransactionDetails/:index" element={<TransactionDetails />} />
                    <Route path="/transaction/:index/edit" element={<TransactionEdit />} />
                </Routes>
            </main>


    </div>
    )
};

export default App;