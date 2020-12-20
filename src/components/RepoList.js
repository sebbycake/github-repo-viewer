import React, { useState, useEffect } from "react";
import Repo from "./Repo";

function RepoList(props) {

    const [repoData, setRepoData] = useState([])

    const fetchData = async () => {
        const response = await fetch(`https://api.github.com/users/${props.username}/repos`);
        const data = await response.json()
        setRepoData(data)
    }

    useEffect(() => {
        fetchData();
    }, []);


    
    const repoList = repoData.length > 0 
                    ? repoData.map(repo => <Repo key={repo.id} data={repo} />) 
                    : <p className="repo-error-msg">Oops... There is no repository for this user.</p>


    return (
        <div className="repo-list-container">
            <h1>{props.username}'s Repositories</h1>
            <div className="repo-list">
                {repoList}
            </div>
        </div>
    )
}

export default RepoList