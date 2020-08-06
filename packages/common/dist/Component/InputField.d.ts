import { FieldProps } from "formik";
import * as React from "react";
export declare class InputField extends React.Component<FieldProps<any> & {
    name: string;
    inputname: string;
    nextInputName: string;
}> {
    onChangeText: (text: string) => void;
    render(): JSX.Element;
}
