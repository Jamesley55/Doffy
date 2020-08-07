"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const MaterialCommunityIcons_1 = require("react-native-vector-icons/MaterialCommunityIcons");
function MaterialCheckbox5(props) {
    return (React.createElement(react_native_1.TouchableOpacity, { style: [styles.container, props.style] },
        React.createElement(MaterialCommunityIcons_1.default, { name: props.checked ? "checkbox-marked" : "checkbox-blank-outline", style: styles.checkIcon })));
}
const styles = react_native_1.StyleSheet.create({
    container: {
        backgroundColor: "transparent",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
    },
    checkIcon: {
        color: "#3F51B5",
        fontFamily: "roboto-regular",
        fontSize: 28,
        lineHeight: 28,
    },
});
exports.default = MaterialCheckbox5;
//# sourceMappingURL=MaterialCheckbox5.js.map