import React from 'react';

let JumpIndex = ({jumps, newJumpClick}) => {
  let jumpsList = jumps.map((jump) => {
    return(
      <li key={jump.split(" ")[1]}>
        { jump }
      </li>
    );
  });

  return (
    <div>
      <h1>Jump Index</h1>
      <button onClick={newJumpClick}>
        Add Jump
      </button>

      <h3>Jump List</h3>
      <ol>
        { jumpsList }
      </ol>
    </div>
  );
};

export default JumpIndex;
