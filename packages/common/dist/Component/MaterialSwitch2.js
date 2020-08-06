"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialSwitch2 = void 0;
const React = require("react");
const react_native_1 = require("react-native");
class MaterialSwitch2 extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.state = {
            values: false,
        };
    }
    render() {
        return (React.createElement(react_native_1.View, { style: [styles.container] },
            React.createElement(react_native_1.Switch, { value: this.state.values, trackColor: {
                    true: "green",
                    false: "rgba(230, 230, 230,1)",
                }, style: styles.switch1, onValueChange: () => {
                    this.state.values
                        ? this.setState({ values: false }, () => {
                            this.setState({ values: false });
                            this.props.handle(this.state.values);
                        })
                        : this.setState({ values: true }, () => {
                            this.setState({ values: true });
                            this.props.handle(this.state.values);
                        });
                } })));
    }
}
exports.MaterialSwitch2 = MaterialSwitch2;
const styles = react_native_1.StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
    },
    switch1: {
        width: 45,
        height: 22,
    },
});
//# sourceMappingURL=MaterialSwitch2.js.map