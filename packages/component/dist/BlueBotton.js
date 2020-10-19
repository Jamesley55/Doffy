"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
class BlueButton extends React.PureComponent {
    render() {
        const { style, Text1 } = this.props;
        return (React.createElement(react_native_1.TouchableOpacity, { style: [styles.container, style], onPress: this.props.onPress },
            React.createElement(react_native_1.Text, { style: styles.caption }, Text1 || "BUTTON")));
    }
}
exports.BlueButton = BlueButton;
const styles = react_native_1.StyleSheet.create({
    container: {
        backgroundColor: "#2196F3",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0,
        },
        shadowColor: "#000",
        shadowOpacity: 0.35,
        shadowRadius: 5,
    },
    caption: {
        color: "#fff",
        fontSize: 14,
    },
});
//# sourceMappingURL=BlueBotton.js.map