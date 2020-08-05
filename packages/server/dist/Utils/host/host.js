"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.host = exports.port = void 0;
exports.port = process.env.NODE_ENV === "test"
    ? process.env.Test_PORT
    : process.env.NODE_ENV === "production"
        ? process.env.PRODUCTION_PORT
        : process.env.DEVOP_PORT;
exports.host = `http://localhost:${exports.port}/graphql`;
//# sourceMappingURL=host.js.map