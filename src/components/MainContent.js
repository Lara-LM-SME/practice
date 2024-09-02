import React, { useState } from "react";

function MainContent() {
  const [message, setMessage] = useState("Hello, world!");

  const handleClick = () => {
    setMessage("You clicked the button!");
  };

  return (
    <main>
      <p>{message}</p>
      <button onClick={handleClick}>Click Me</button>
    </main>
  );
}

export default MainContent;
