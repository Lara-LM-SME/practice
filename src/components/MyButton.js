import React from "react";

// A React component that changes its appearance on hover and triggers an action on click
function MyButton() {
  // State to track whether the button is being hovered over
  const [isHovered, setIsHovered] = React.useState(false);

  // Event handler for mouse enter (hover)
  const handleMouseEnter = () => setIsHovered(true);

  // Event handler for mouse leave (hover end)
  const handleMouseLeave = () => setIsHovered(false);

  // Event handler for button click
  const handleClick = () => alert("Button clicked!");

  // Render the button with combined event handling
  return (
    <button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{ backgroundColor: isHovered ? "lightblue" : "white" }} // Change color on hover
    >
      Hover and Click Me
    </button>
  );
}

export default MyButton;
