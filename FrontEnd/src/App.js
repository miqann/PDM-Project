import Header from './components/Header'
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './components/Main';
import LoginPage from './components/LoginPage';

function App() {
    return(
        <Router>
            <Header/>
            <Main/>
            
        </Router>
        
    );
}

export default App;