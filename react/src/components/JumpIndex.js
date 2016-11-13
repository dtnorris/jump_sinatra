import React from 'react';
import JumpFormContainer from '../containers/JumpFormContainer';

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
      <JumpFormContainer />

      <h3>Jump List</h3>
      <div id="jump-list">
        <ol>
          { jumpsList }
        </ol>
      </div>
    </div>
  );
};

export default JumpIndex;
