import React, { useState } from 'react';


function ToggleWidget() {
  const [isHidden, setIsHidden] = useState(false);

  const toggleVisibility = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div>
      {!isHidden && <p>Hide Me</p>}
      <button onClick={toggleVisibility}>
        {isHidden ? 'Show' : 'Hide'}
      </button>
    </div>
  );
}

export default ToggleWidget;



