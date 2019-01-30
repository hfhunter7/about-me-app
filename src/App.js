import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

// component
//import PrivateRoute from './components/PrivateRoute';
import Welcome from "./pages/Welcome";

function handleUpdate() {
    let {
        action
    } = this.state.location;

    if (action === 'PUSH') {
        window.scrollTo(0, 0);
    }
}

class App extends Component {
    render() {
        return (
            <div>
                <Router onUpdate={handleUpdate}>
                    <div>
                        <Switch>
                            <Route exact path="/" component={Welcome} />
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
