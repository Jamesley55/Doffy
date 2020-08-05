"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generate = void 0;
function generate(n) {
    const add = 1;
    let max = 12 - add;
    if (n > max) {
        return generate(max) + generate(n - max);
    }
    max = Math.pow(10, n + add);
    const min = max / 10;
    const numberGenerated = Math.floor(Math.random() * (max - min + 1)) + min;
    return ("" + numberGenerated).substring(add);
}
exports.generate = generate;
//# sourceMappingURL=generate.js.map