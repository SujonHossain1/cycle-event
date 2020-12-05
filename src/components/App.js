import {
    BrowserRouter as Router
} from "react-router-dom";
import AuthProvider from "../providers/authProvider";
import CountProvider from "../providers/countProvider";

import Routes from "./Routes";





const App = () => {

    return (
        <AuthProvider>
            <CountProvider>
                <Router>
                    <Routes />
                </Router>
            </CountProvider>
        </AuthProvider>
    );
};

export default App;