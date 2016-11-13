//action section
const ADD_JUMP = 'ADD_JUMP'

let addJump = () => {
  return {
    type: ADD_JUMP
  };
};

//reducer section
import { combineReducers } from 'redux'

const initialState = {
  jumps: []
};

function jumpLogs(state = initialState, action) {
  switch (action.type) {
    case ADD_JUMP:
      return Object.assign({}, state, {
        jumps: state.jumps.concat([`jump ${state.jumps.length+1}`])
      })
    default:
      return state
  }
};

let jumpLogApp = combineReducers({
  jumpLogs
});

export {
  addJump,
  jumpLogApp
};
