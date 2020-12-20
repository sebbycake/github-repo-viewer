import React, { useState, useEffect } from "react";

function RepoDetail({ match }) {

    const [repoDetail, setRepoDetail] = useState({})

    const fetchData = async () => {
        const response = await fetch(`https://api.github.com/repos/${match.params.owner}/${match.params.repo_name}/readme`);
        const data = await response.json()
        setRepoDetail(data)
    }

    useEffect(() => {
        fetchData();
    }, []);

    const URL = repoDetail.html_url;

    return (
        <div>

            <div className="repo-detail-container">
                <h1>View README for {match.params.repo_name} repository: </h1>
                <div>
                    <a href={URL}>{match.params.repo_name}'s' README</a>
                </div>
            </div>
        </div>
    )


}

export default RepoDetail