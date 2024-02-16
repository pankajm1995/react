import React from "react";

function Eventhandler()
 {
  const CustomButton = ({ onPress }) => {
    return (
      <button type="button" onClick={onPress}>
        Click on me
      </button>
    );
  };
  
  const App = () => {
    const handleEvent = () => {
      alert("I was clicked");
    };
    return <CustomButton onPress={handleEvent} />;
  };
};

export default Eventhandler;