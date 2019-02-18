import React from "react";

export default function About(props) {
  return (
    <div>
      <h1 className="display-4">About</h1>

      {/* Get params */}
      <h1 className="display-4">{props.match.params.param}</h1>
      <p className="lead">App to manage contacts</p>
      <p className="text-cecondary">Version 1.0.0</p>
    </div>
  );
}
