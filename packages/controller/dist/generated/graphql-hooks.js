"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tag_1 = require("graphql-tag");
const ApolloReactHooks = require("@apollo/react-hooks");
var CacheControlScope;
(function (CacheControlScope) {
    CacheControlScope["Public"] = "PUBLIC";
    CacheControlScope["Private"] = "PRIVATE";
})(CacheControlScope = exports.CacheControlScope || (exports.CacheControlScope = {}));
exports.LoginDocument = graphql_tag_1.default `
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    id
    email
  }
}
    `;
function useLoginMutation(baseOptions) {
    return ApolloReactHooks.useMutation(exports.LoginDocument, baseOptions);
}
exports.useLoginMutation = useLoginMutation;
exports.QueryDocument = graphql_tag_1.default `
    query query {
  me {
    id
  }
}
    `;
function useQueryQuery(baseOptions) {
    return ApolloReactHooks.useQuery(exports.QueryDocument, baseOptions);
}
exports.useQueryQuery = useQueryQuery;
function useQueryLazyQuery(baseOptions) {
    return ApolloReactHooks.useLazyQuery(exports.QueryDocument, baseOptions);
}
exports.useQueryLazyQuery = useQueryLazyQuery;
exports.RegisterDocument = graphql_tag_1.default `
    mutation Register($email: String!, $password: String!, $password2: String!) {
  register(email: $email, password: $password, password2: $password2)
}
    `;
function useRegisterMutation(baseOptions) {
    return ApolloReactHooks.useMutation(exports.RegisterDocument, baseOptions);
}
exports.useRegisterMutation = useRegisterMutation;
//# sourceMappingURL=graphql-hooks.js.map