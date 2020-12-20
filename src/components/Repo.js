import React from "react";

function Repo(props) {
    return (

        <div className="repo-card">

            {/* Display GitHub repo name */}
            
            <div className="repo-card-name">
                {props.data.name}
            </div>

            {/* Display GitHub repo description */}
            <div className="repo-card-description">
                {props.data.description}
            </div>

            {/* Display GitHub repo creation date */}
            <div className="repo-card-date">
                {props.data.created_at}
            </div>


        </div>

    )
}

export default Repo