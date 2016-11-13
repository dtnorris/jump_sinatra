//action section
const ADD_JUMP = 'ADD_JUMP'

let addJump = (text) => {
  return {
    type: ADD_JUMP,
    text
  };
};

//reducer section
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

const initialState = {
  jumps: []
};

function jumpLogs(state = initialState, action) {
  switch (action.type) {
    case ADD_JUMP:
      return Object.assign({}, state, {
        jumps: state.jumps.concat([action.text.jump])
      })
    default:
      return state
  }
};

let jumpLogApp = combineReducers({
  jumpLogs: jumpLogs,
  form:     formReducer
});

export {
  addJump,
  jumpLogApp
};
