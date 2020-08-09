"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
class MaterialFixedLabelTextbox extends React.PureComponent {
    render() {
        return (React.createElement(react_native_1.View, { style: [styles.container, this.props.style] },
            React.createElement(react_native_1.Text, { style: styles.label }, this.props.text1 || "FixedLabel"),
            React.createElement(react_native_1.TextInput, { placeholder: this.props.textInput || undefined, style: styles.inputStyle })));
    }
}
exports.MaterialFixedLabelTextbox = MaterialFixedLabelTextbox;
const styles = react_native_1.StyleSheet.create({
    container: {
        backgroundColor: "transparent",
        flexDirection: "row",
        paddingLeft: 16,
        borderColor: "#D9D5DC",
        borderBottomWidth: 1,
    },
    label: {
        color: "#000",
        alignSelf: "flex-start",
        opacity: 0.5,
        paddingTop: 16,
        paddingBottom: 8,
        fontSize: 16,
        lineHeight: 16,
    },
    inputStyle: {
        flex: 1,
        color: "#000",
        alignSelf: "stretch",
        paddingTop: 14,
        paddingRight: 5,
        paddingBottom: 8,
        paddingLeft: 30,
        fontSize: 16,
        lineHeight: 16,
    },
});
exports.default = MaterialFixedLabelTextbox;
//# sourceMappingURL=MaterialFixedLabelTextbox.js.map