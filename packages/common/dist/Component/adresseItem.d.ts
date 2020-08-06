import * as React from "react";
import { StyleProp, TextStyle } from "react-native";
interface Props {
    value: any;
    onChange: any;
    placeholder: any;
    label: any;
    styleTextInput: StyleProp<TextStyle>;
}
declare class AddressItem extends React.PureComponent<Props> {
    render(): JSX.Element;
}
export default AddressItem;
