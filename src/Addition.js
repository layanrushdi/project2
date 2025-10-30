import React from "react";

function Addition({ numberOne, numberTwo }) {
  const sum = numberOne + numberTwo;
  return (
    <div>
      <p>
        {numberOne} + {numberTwo} = {sum}
      </p>
    </div>
  );
}

export default Addition;
