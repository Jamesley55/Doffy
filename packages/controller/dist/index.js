"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_boost_1 = require("apollo-boost");
exports.apolloClient = new apollo_boost_1.default({
    uri: "http://localhost:4000/graphql",
});
__export(require("./generated/graphql-hooks"));
//# sourceMappingURL=index.js.map