import React from "react";
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import SearchForm from "./Search";
import RepoDetail from "./RepoDetail";

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={SearchForm} />
                    <Route path="/repo/:owner/:repo_name/" exact component={RepoDetail} />
                </Switch>
            </div>
        </Router>
    )
}

export default App