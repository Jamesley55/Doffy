import * as React from "react";
import { FieldProps } from "formik";
import { Input } from "react-native-elements";

const errStyle = {
  color: "red",
};

export class InputField extends React.Component<FieldProps<any>> {
  onchangeText = (text: string) => {
    const {
      form: { setFieldValue },
      field: { name },
    } = this.props;
    this.props.form.setFieldValue(name, text);
  };
  render() {
    const {
      field,
      form: { touched, errors },
      ...props
    } = this.props;
    const errorMsg = touched[field.name] && errors[field.name];
    return (
      <Input
        {...props}
        errorStyle={errStyle}
        onChangeText={this.onchangeText}
        value={field.value}
        onBlur={field.onBlur}
      />
    );
  }
}
