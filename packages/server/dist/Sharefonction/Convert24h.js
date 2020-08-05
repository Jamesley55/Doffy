"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tConv24 = void 0;
function tConv24(time24) {
    let ts = time24;
    {
        const H = +ts.substr(0, 2);
        let h = H % 12 || 12;
        h = h < 10 ? "0" + h : h;
        const ampm = H < 12 ? " AM" : " PM";
        ts = h + ts.substr(2, 3) + ampm;
    }
    return ts;
}
exports.tConv24 = tConv24;
//# sourceMappingURL=Convert24h.js.map