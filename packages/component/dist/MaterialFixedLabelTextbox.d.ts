import * as React from "react";
import { StyleProp, TextStyle } from "react-native";
interface Props {
    style: StyleProp<TextStyle>;
    text1: any;
    textInput: any;
}
export declare class MaterialFixedLabelTextbox extends React.PureComponent<Props> {
    render(): JSX.Element;
}
export default MaterialFixedLabelTextbox;
