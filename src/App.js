import LoginPage from "./pages/Login";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

function App() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">About</Link>
                    </li>
                    <li>
                        <Link to="/register">Dashboard</Link>
                    </li>
                </ul>

                <Switch>
                    <Route exact path="/login">
                        
                        <LoginPage />
                    </Route>
                    {/* <Route path="/about"> */}
                    {/* <About /> */}
                    {/* </Route> */}
                    {/* <Route path="/dashboard"> */}
                    {/* <Dashboard /> */}
                    {/* </Route> */}
                </Switch>

            </div>
        </Router>
    );
}

export default App;