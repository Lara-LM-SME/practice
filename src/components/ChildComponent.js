// ChildComponent.js
import React from "react";
import GrandchildComponent from "./GrandchildComponent";

function ChildComponent(props) {
  return (
    <div>
      <GrandchildComponent data={props.data} />
    </div>
  );
}
export default ChildComponent;
