import * as React from "react";
import { StyleProp, TextStyle } from "react-native";
interface Props {
    viewStyle?: StyleProp<TextStyle>;
    TextStyle: StyleProp<TextStyle>;
    TextInputStyle: StyleProp<TextStyle>;
    Text: string;
    placeHolder: string;
    onSubmit: any;
    keyboardType?: any;
    multiline?: any;
    blurOnSubmit?: any;
}
export declare class Input extends React.PureComponent<Props> {
    render(): JSX.Element;
}
export {};
