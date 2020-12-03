import { useReducer } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { foodReducer, foodState } from "../store/reducers/foodReducer";
import Routes from "./Routes";



const App = () => {

    return (
        <Router>
            <div className="container">

                <Routes />
            </div>
        </Router>
    );
};

export default App;