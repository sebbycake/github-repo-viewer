import React from "react";
import { Link } from "react-router-dom";

function Repo(props) {

    const linkStyles = {
        color: "#303a52",
        fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
    }

    const repoDescription = !props.data.description ? "No description available" : props.data.description

    return (

        <div className="repo-card">

            {/* Display GitHub repo name */}
            <div className="repo-card-name">
                <Link style={linkStyles} to={`/repo/${props.data.owner.login}/${props.data.name}/`}>{props.data.name}</Link>
            </div>

            {/* Display GitHub repo description */}
            <div className="repo-card-description">
                {repoDescription}
            </div>

        </div>

    )
}

export default Repo