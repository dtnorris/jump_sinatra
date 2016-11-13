import React from 'react';
import { Field } from 'redux-form';

let WrappedReduxField = ({ input, label, meta: { touched, error }, type, id }) => {
  return (
    <div>
      <div>
        <label htmlFor={id}> { label } </label>
      </div>
      <div>
        <input {...input} type={type} id={id} />
      </div>
      <div>
        { touched && error && <span style={{color: 'red'}}>{error}</span> }
      </div>
    </div>
  )
}

let JumpForm = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="jump" key="jump" label="jump"
          type="text"
          component={WrappedReduxField}
        />
      </div>

      <button type="submit">
        Submit
      </button>
    </form>
  );
}

export default JumpForm;
