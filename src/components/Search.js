import React, { useState } from "react";
import Repo from "./Repo";
import RepoList from "./RepoList";

function SearchForm() {

    const [username, setUsername] = useState("");

    const saveUsername = (event) => {
        event.preventDefault();
        setUsername(event.target.value)
    }

    return (
        <div>

            <div className="search-container">
                <h1>Search for users' GitHub Repo List</h1>
            </div>

            <div>
                <form>
                    <input onSubmit={saveUsername}
                        type="text"
                        value={username}
                        placeholder="Enter GitHub username"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </form> 
            </div>

            {username && <RepoList username={username}/>}
            




        </div>
    )

}

export default SearchForm