"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Checkbox = void 0;
const vector_icons_1 = require("@expo/vector-icons");
const React = require("react");
const react_native_1 = require("react-native");
class Checkbox extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.state = {
            values: false,
        };
    }
    render() {
        return (React.createElement(react_native_1.TouchableOpacity, { style: {
                borderRadius: 30,
                marginLeft: 10,
                marginTop: "1%",
            }, onPress: () => {
                this.state.values
                    ? this.setState({ values: false }, () => {
                        this.setState({ values: false });
                        this.props.handle(this.state.values);
                    })
                    : this.setState({ values: true }, () => {
                        this.setState({ values: true });
                        this.props.handle(this.state.values);
                    });
            } },
            React.createElement(vector_icons_1.AntDesign, { name: "checkcircle", size: 24, color: this.state.values ? "green" : "black" })));
    }
}
exports.Checkbox = Checkbox;
//# sourceMappingURL=checkBox.js.map