"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchInput = void 0;
const React = require("react");
const react_native_1 = require("react-native");
class SearchInput extends React.PureComponent {
    render() {
        const { setSearchInput, SearchInputState } = this.props;
        return (React.createElement(react_native_1.View, { style: [styles.container, this.props.style] },
            React.createElement(react_native_1.TextInput, { keyboardAppearance: "dark", returnKeyType: "search", placeholder: "What are you looking for?", style: styles.inputStyle, onChangeText: (text) => setSearchInput({ search: text, offset: 1, limit: 3 }), value: SearchInputState.username })));
    }
}
exports.SearchInput = SearchInput;
const styles = react_native_1.StyleSheet.create({
    container: {
        backgroundColor: "transparent",
        flexDirection: "row",
        alignItems: "center",
        borderColor: "#D9D5DC",
        borderBottomWidth: 1,
    },
    inputStyle: {
        flex: 1,
        color: "#000",
        alignSelf: "stretch",
        paddingTop: 16,
        paddingRight: 5,
        paddingBottom: 8,
        fontSize: 16,
        fontFamily: "roboto-regular",
        lineHeight: 16,
    },
});
//# sourceMappingURL=SearchInput.js.map