"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputField = void 0;
const React = require("react");
const react_native_elements_1 = require("react-native-elements");
const errStyle = {
    color: "red",
};
class InputField extends React.Component {
    constructor() {
        super(...arguments);
        this.onChangeText = (text) => {
            const { form: { setFieldValue }, field: { name }, } = this.props;
            setFieldValue(name, text);
        };
    }
    render() {
        const _a = this.props, { field, form: { touched, errors } } = _a, props = __rest(_a, ["field", "form"]);
        const errorMsg = touched[field.name] && errors[field.name];
        return (React.createElement(react_native_elements_1.Input, Object.assign({}, props, { errorStyle: errStyle, errorMessage: errorMsg, onChangeText: this.onChangeText, value: field.value })));
    }
}
exports.InputField = InputField;
//# sourceMappingURL=InputField.js.map