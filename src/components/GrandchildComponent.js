// GrandChildComponent.js
import React from "react";

function GrandchildComponent(props) {
  return (
    <div>
      <GrandchildComponent data={props.data} />
    </div>
  );
}

export default GrandchildComponent;
