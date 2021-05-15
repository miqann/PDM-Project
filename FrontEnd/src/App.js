
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/Login';
import RegisterPage from './components/Register';
import Transfer from './components/Transfer';
import UserInterface from './components/UserInterface';

function App() {
    return(
        <Router>
            <UserInterface/>
        {/* <Switch>
         <Route exact path="/" component={HomePage} />
         <Route path="/login" component={LoginPage} />
         <Route path="/register" component={RegisterPage} />
         <Route path="/userinterface" component={UserInterface}/>
         <Route path="/transfer" component={Transfer}/>
       </Switch> */}
       </Router>
    );
}

export default App;