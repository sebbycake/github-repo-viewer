import React, { useState } from "react";
import {Redirect} from "react-router-dom";
import RepoList from "./RepoList";

function SearchForm() {

    const [username, setUsername] = useState("");

    return (
        <div>

            <div className="search-container">
                <h1>Search for user's GitHub Repo List</h1>
            </div>

            <div>
                <form>
                    <input
                        type="text"
                        value={username}
                        placeholder="Copy & paste full GitHub username here. Typing doesn't work yet :("
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </form>
            </div>

            {username && <RepoList username={username} />}
        
        </div>
    )

}

export default SearchForm