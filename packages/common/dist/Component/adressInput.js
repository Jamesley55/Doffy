"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressInput = void 0;
const React = require("react");
const react_native_1 = require("react-native");
const adresseItem_1 = require("./adresseItem");
class AddressInput extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.state = {
            streetValue: "",
            CityValue: "",
            stateValue: "",
            Country: "",
        };
    }
    render() {
        return (React.createElement(react_native_1.View, null,
            React.createElement(react_native_1.View, null,
                React.createElement(adresseItem_1.default, { styleTextInput: this.props.styleTextInput, onChange: (e) => {
                        console.log(e.nativeEvent);
                        this.setState({ streetValue: e.nativeEvent.text }, () => {
                            console.log("street values", this.state.streetValue);
                            this.props.StreetValues(this.state.streetValue);
                        });
                    }, label: "Adress", value: this.state.streetValue, placeholder: "Adresse" }),
                React.createElement(adresseItem_1.default, { styleTextInput: this.props.styleTextInput, onChange: (e) => this.setState({ CityValue: e.nativeEvent.text }, () => {
                        this.props.cityValues(this.state.CityValue);
                    }), label: "City", value: this.state.CityValue, placeholder: "City" }),
                React.createElement(adresseItem_1.default, { styleTextInput: this.props.styleTextInput, onChange: (e) => this.setState({ stateValue: e.nativeEvent.text }, () => {
                        this.props.stateValues(this.state.stateValue);
                    }), label: "State", value: this.state.stateValue, placeholder: "State" }),
                React.createElement(adresseItem_1.default, { styleTextInput: this.props.styleTextInput, onChange: (e) => this.setState({ Country: e.nativeEvent.text }, () => {
                        this.props.Country(this.state.Country);
                    }), label: "Country", value: this.state.Country, placeholder: "Country" }))));
    }
}
exports.AddressInput = AddressInput;
//# sourceMappingURL=adressInput.js.map