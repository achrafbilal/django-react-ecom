import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Register from './screens/Register';
import Login from './screens/Login';
import Index from './screens/Index';

const Routes = ({ auth, onLogin, children }) => {
    return (
        <Router>

            {children}
            <Switch>
                <Route path="/login" exact>
                    <Login onLogin={onLogin} />
                </Route>
                <Route path="/" exact>
                    <Index />
                </Route>
                <Route path="/register" exact>
                    <Register />
                </Route>
            </Switch>
        </Router>
    )
}
export default Routes