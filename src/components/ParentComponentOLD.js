// ParentComponent.js
import React from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  const data = "Hello from Parent";

  return (
    <div>
      <ChildComponent data={data} />
    </div>
  );
}

export default ParentComponent;
