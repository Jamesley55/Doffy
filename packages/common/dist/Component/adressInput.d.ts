import * as React from "react";
import { StyleProp, TextStyle } from "react-native";
interface Props {
    styleTextInput: StyleProp<TextStyle>;
    StreetValues: any;
    cityValues: any;
    stateValues: any;
    Country: any;
}
export declare class AddressInput extends React.PureComponent<Props> {
    state: {
        streetValue: string;
        CityValue: string;
        stateValue: string;
        Country: string;
    };
    render(): JSX.Element;
}
export {};
