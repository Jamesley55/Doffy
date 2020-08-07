"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const { PlatformConstants } = react_native_1.NativeModules;
const deviceType = PlatformConstants.interfaceIdiom;
class AddressItem extends React.PureComponent {
    render() {
        return (React.createElement(react_native_1.View, null,
            React.createElement(react_native_1.Text, { style: deviceType === "phone"
                    ? {
                        marginLeft: 10,
                        fontSize: 16,
                        marginBottom: 10,
                        marginTop: 10,
                    }
                    : {
                        marginLeft: 20,
                        fontSize: 20,
                        marginBottom: 15,
                        marginTop: 15,
                    } }, this.props.label),
            React.createElement(react_native_1.TextInput, { keyboardAppearance: "dark", returnKeyType: "done", value: this.props.value, onChange: this.props.onChange, placeholder: this.props.placeholder, style: this.props.styleTextInput || undefined })));
    }
}
exports.default = AddressItem;
//# sourceMappingURL=adresseItem.js.map