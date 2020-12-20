import React from "react";

function Repo(props) {

    // const date = new Date(props.data.created_at);

    // const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    //     "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    // ];

    // const month = monthNames[date.getMonth()];
    // const year = date.getFullYear();
    // const monthYear = month + " " + year;

    const repoDescription = !props.data.description ? "No description available" : props.data.description

    return (

        <div className="repo-card">

            {/* Display GitHub repo name */}

            <div className="repo-card-name">
                {props.data.name}
            </div>

            {/* Display GitHub repo description */}
            <div className="repo-card-description">
                {repoDescription}
            </div>

            {/* Display GitHub repo creation date */}
            {/* <div className="repo-card-date">
                Created at: {monthYear}
            </div> */}


        </div>

    )
}

export default Repo