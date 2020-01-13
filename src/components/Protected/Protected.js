import React from "react";

const Protected = props => {
  return (
    <div>
      <div>
        <props.component />
      </div>
    </div>
  );
};

export default Protected;
