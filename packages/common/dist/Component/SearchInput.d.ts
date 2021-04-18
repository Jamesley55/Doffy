import * as React from "react";
import { StyleProp, TextStyle } from "react-native";
interface Props {
    SearchInputState: any;
    setSearchInput: any;
    style: StyleProp<TextStyle>;
    textInput1: any;
}
export declare class SearchInput extends React.PureComponent<Props> {
    render(): JSX.Element;
}
export {};
