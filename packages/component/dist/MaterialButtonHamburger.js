"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialButtonHamburger = void 0;
const React = require("react");
const react_native_1 = require("react-native");
const MaterialCommunityIcons_1 = require("react-native-vector-icons/MaterialCommunityIcons");
class MaterialButtonHamburger extends React.PureComponent {
    render() {
        const { navigation } = this.props;
        return (React.createElement(react_native_1.TouchableOpacity, { style: [styles.container, this.props.style], onPress: () => {
                navigation.toggleDrawer();
            } },
            React.createElement(MaterialCommunityIcons_1.default, { name: "menu", style: styles.caption })));
    }
}
exports.MaterialButtonHamburger = MaterialButtonHamburger;
const styles = react_native_1.StyleSheet.create({
    container: {
        backgroundColor: "#3F51B5",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        elevation: 2,
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
        fontSize: 24,
        fontFamily: "roboto-700",
    },
});
exports.default = MaterialButtonHamburger;
//# sourceMappingURL=MaterialButtonHamburger.js.map