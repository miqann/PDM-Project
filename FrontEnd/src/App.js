
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/Login';
import RegisterPage from './components/Register';
import SearchCustomer from './components/SearchCustomer';
import SearchLoginlog from './components/SearchLoginlog';
import SearchAccount from './components/SearchAccount';
import SearchTransactionLog from './components/SearchTransactionLog';

function App() {
    return(
        <Router>
        <Switch>
         <Route exact path="/" component={HomePage} />
         <Route path="/login" component={LoginPage} />
         <Route path="/register" component={RegisterPage} />
         <Route path="/searchaccount" component={SearchAccount} />
         <Route path="/searchcustomer" component={SearchCustomer} />
         <Route path="/searchloginlog" component={SearchLoginlog} />
         <Route path="/searchtransactionlog" component={SearchTransactionLog} />
       </Switch>
       </Router>
    );
}

export default App;