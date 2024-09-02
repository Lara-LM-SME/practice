import React from "react";

// Define the GrandchildComponent
function GrandchildComponent({ data }) {
  return (
    <div>
      <p>{data}</p>
    </div>
  );
}

// Define the ChildComponent
function ChildComponent({ data }) {
  return (
    <div>
      <GrandchildComponent data={data} />
    </div>
  );
}

// Define the ParentComponent
function ParentComponent() {
  const data = "Hello from Parent";

  return (
    <div>
      <ChildComponent data={data} />
    </div>
  );
}

export default ParentComponent;
