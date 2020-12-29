import {
    BrowserRouter as Router
} from "react-router-dom";
import Routes from "./Routes";
import Modal from "./Shared/Navbar/Modal";
import Navbar from "./Shared/Navbar/Navbar";





const App = () => {

    return (
        <Router>
            <Navbar />
            <Modal />
            <Routes />
        </Router>
    );
};

export default App;