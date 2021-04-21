//Redux-Form

import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { newStream } from "../../actions";

const renderInput = ({ input, label, meta }) => {
  const className = `${meta.touched && meta.error ? "field error" : "field"}`;
  const renderError = () => {
    const { touched, error } = meta;
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };

  return (
    <div className={className}>
      <label>{label}</label>
      <input {...input} />
      {renderError()}
    </div>
  );
};

const StreamCreate = (props) => {
  const onSubmit = (formValues) => {
    newStream(formValues);
  };
  return (
    <form className="ui form error" onSubmit={props.handleSubmit(onSubmit)}>
      <Field name="title" component={renderInput} label="Enter Title:" />
      <Field
        name="description"
        component={renderInput}
        label="Enter Description:"
      />
      <button className="ui button teal">Submit</button>
    </form>
  );
};

const validate = (formValue) => {
  const error = {};
  if (!formValue.title) {
    error.title = "Please enter a title!";
  }
  if (!formValue.description) {
    error.description = "Please enter a description";
  }

  return error;
};

const reduxFormWrapped = reduxForm({
  form: "streamCreate",
  validate: validate,
})(StreamCreate);

export default connect(null, { newStream })(reduxFormWrapped);
