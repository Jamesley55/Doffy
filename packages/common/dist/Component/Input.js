"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
const React = require("react");
const react_native_1 = require("react-native");
class Input extends React.PureComponent {
    render() {
        return (React.createElement(react_native_1.View, { style: this.props.viewStyle || undefined },
            React.createElement(react_native_1.Text, { style: this.props.TextStyle || undefined }, this.props.Text),
            React.createElement(react_native_1.TextInput, Object.assign({}, this.props, { keyboardAppearance: "dark", returnKeyType: "done", style: this.props.TextInputStyle || undefined, placeholder: this.props.placeHolder, onBlur: this.props.onSubmit }))));
    }
}
exports.Input = Input;
//# sourceMappingURL=Input.js.map