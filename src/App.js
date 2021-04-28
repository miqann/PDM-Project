import Header from './components/Header'
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar';

function App() {
    return(
        <Router>
            <Header/>
            <Sidebar/>
        </Router>
        
    );
}

export default App;