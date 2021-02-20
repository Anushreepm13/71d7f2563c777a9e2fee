import React from "react";

export default function AstroidDetails(props) {
  const { data } = props;
  return (
    <div className="Astroid-details">
      <h5>Name: {data.name}</h5>
      <h5>
        <b>Nasa Jpl URL </b>: {data.nasa_jpl_url}
      </h5>
      <h5>
        Is potentially hazardous asteroid:{" "}
        {data.is_potentially_hazardous_asteroid ? "Yes" : "No"}
      </h5>
    </div>
  );
}
