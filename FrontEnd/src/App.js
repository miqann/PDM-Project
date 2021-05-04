import LoginPage from "./components/LoginPage/LoginPage";
import { BrowserRouter as Router } from 'react-router-dom';



function App() {
    return(
        <Router>
            <LoginPage />
        </Router>
    );
}

export default App;