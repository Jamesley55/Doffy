"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialButtonDark = void 0;
const React = require("react");
const react_native_1 = require("react-native");
class MaterialButtonDark extends React.PureComponent {
    render() {
        const { navigation } = this.props;
        return (React.createElement(react_native_1.TouchableOpacity, { onPress: () => {
                navigation.navigate(this.props.nextScreen);
            }, style: [styles.container, this.props.style] },
            React.createElement(react_native_1.Text, { style: styles.caption }, this.props.text1 || "BUTTON")));
    }
}
exports.MaterialButtonDark = MaterialButtonDark;
const styles = react_native_1.StyleSheet.create({
    container: {
        backgroundColor: "#212121",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingRight: 16,
        paddingLeft: 16,
        elevation: 2,
        minWidth: 88,
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
        fontFamily: "roboto-regular",
    },
});
exports.default = MaterialButtonDark;
//# sourceMappingURL=MaterialButtonDark.js.map