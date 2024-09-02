import React, { useState } from "react";

const WelcomeBack = ({ name }) => {
  // Initializing the state
  const [count, setCount] = useState(0);

  // Updating the state
  const incrementCount = () => {
    setCount(count + 1);
  };

  // Re-rendering
  return (
    <div>
      <h1>Welcome back {name}!</h1>
      <p>You have clicked the button {count} times.</p>
      <button onClick={incrementCount}>Click Me</button>
    </div>
  );
};

export default WelcomeBack;
