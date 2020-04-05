import React from "react";
import { Field, reduxForm } from "redux-form";

class streamForm extends React.Component {
  renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };
  renderInput = (formProps) => {
    const className = `field ${
      formProps.meta.error && formProps.meta.touched ? "error" : ""
    }`;
    return (
      // <input
      //   onChange={formProps.input.onChange}
      //   value={formProps.input.value}
      // ></input>
      <div className={className}>
        <label>{` Enter ${formProps.label}`}</label>
        <input {...formProps.input}></input>
        {this.renderError(formProps.meta)}
      </div>
    );
  };
  onSubmit = (formvalues) => {
    this.props.onSubmit(formvalues);
    // console.log(formvalues);
  };
  render() {
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field name="title" component={this.renderInput} label="titile"></Field>
        <Field
          name="description"
          component={this.renderInput}
          label="description"
        ></Field>
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}
const validate = (formvalues) => {
  const errors = {};
  if (!formvalues.title) errors.title = "You must enter a title";
  if (!formvalues.description)
    errors.description = "You must enter a description";
  return errors;
};
// use both connect and reduxForm function simultaneously
export default reduxForm({
  form: "streamForm",
  validate,
})(streamForm);
// const formWrapped = reduxForm({
//   form: "streamCreate",
//   validate,
// })(streamCreate);
// export default connect(null, { createStream })(formWrapped);
