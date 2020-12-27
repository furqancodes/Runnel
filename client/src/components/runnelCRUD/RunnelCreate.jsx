import React from "react";
import { Field, reduxForm } from "redux-form";
const RunnelCreate = (props) => {
  const renderError = ({ touched, error }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };
  const renderInput = ({ input, label, meta }) => {
    // console.log(meta);
    const className = `field ${meta.touched && meta.error ? "error" : ""}`;
    return (
      <div className={className}>
        <label className="label">{label}</label>
        <input type="text" {...input} autoComplete="off" />
        {renderError(meta)}
      </div>
    );
  };

  const submitForm = (props) => {
    console.log(props);
  };

  return (
    <form className="ui form error" onSubmit={props.handleSubmit(submitForm)}>
      <Field name="title" component={renderInput} label="Enter Title"></Field>
      <Field
        name="description"
        component={renderInput}
        label="Enter Description"
      ></Field>
      <button className="ui button primary">Submit</button>
    </form>
  );
};
const validate = (inputValues) => {
  let error = {};
  if (!inputValues.title) {
    error.title = "You Must Enter A Title";
  }
  if (!inputValues.description) {
    error.description = "You Must Enter A Description";
  }
  return error;
};
export default reduxForm({ form: "RunnelCreate", validate })(RunnelCreate);
//