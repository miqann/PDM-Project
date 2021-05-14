
import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/Login';
import RegisterPage from './components/Register';

function App() {
    return(
        <Router>
            <HomePage/>
            <LoginPage/>
            <RegisterPage/>
            
        </Router>
        
    );
}

export default App;