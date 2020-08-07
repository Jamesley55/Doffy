import * as React from "react";
import { StyleProp, TextStyle } from "react-native";
interface Props {
    navigation: any;
    nextScreen: any;
    style: StyleProp<TextStyle>;
    text1: string;
}
export declare class MaterialButtonDark extends React.PureComponent<Props> {
    render(): JSX.Element;
}
export default MaterialButtonDark;
