import React from "react";
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import SearchForm from "./Search";
import RepoList from "./RepoList";

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={SearchForm} />
                </Switch>
            </div>
        </Router>
    )
}

export default App