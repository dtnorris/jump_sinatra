import React from 'react';
import { reduxForm, reset } from 'redux-form';
import { addJump } from '../jumpLogApp';
import JumpForm from '../components/JumpForm';

let validate = (fields) => {
  const errors = {};

  if(!fields.jump) {
    errors['jump'] = "Please enter a jump description";
  }

  return errors;
};

let onSubmit = (fields, dispatch) => {
  dispatch(addJump(fields));
  dispatch(reset('jumpForm'))
};

export default reduxForm({
  form: 'jumpForm', // a unique name for this form
  validate,
  onSubmit
})(JumpForm);
