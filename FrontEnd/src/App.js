
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/Login';
import RegisterPage from './components/Register';

function App() {
    return(
        <Router>
        <Switch>
         <Route exact path="/Homepage" component={HomePage} />
         <Route path="/login" component={LoginPage} />
         <Route path="/register" component={RegisterPage} />
       </Switch>
       </Router>
    );
}

export default App;