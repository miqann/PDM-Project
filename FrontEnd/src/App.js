import Header from './components/Header'
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './components/Main';
import RegisterPage from './components/RegisterPage';

function App() {
    return(
        <Router>
            <RegisterPage/>
        </Router>
    );
}

export default App;