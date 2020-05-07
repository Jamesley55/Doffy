"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tag_1 = require("graphql-tag");
const ApolloReactHooks = require("@apollo/react-hooks");
var CacheControlScope;
(function (CacheControlScope) {
    CacheControlScope["Public"] = "PUBLIC";
    CacheControlScope["Private"] = "PRIVATE";
})(CacheControlScope = exports.CacheControlScope || (exports.CacheControlScope = {}));
exports.ChangePasswordDocument = graphql_tag_1.default `
    mutation changePassword($token: String!, $password: String!) {
  changePassword(token: $token, password: $password) {
    id
    email
    username
  }
}
    `;
function useChangePasswordMutation(baseOptions) {
    return ApolloReactHooks.useMutation(exports.ChangePasswordDocument, baseOptions);
}
exports.useChangePasswordMutation = useChangePasswordMutation;
exports.ConfirmUserDocument = graphql_tag_1.default `
    mutation confirmUser($token: String!) {
  confirmUser(token: $token)
}
    `;
function useConfirmUserMutation(baseOptions) {
    return ApolloReactHooks.useMutation(exports.ConfirmUserDocument, baseOptions);
}
exports.useConfirmUserMutation = useConfirmUserMutation;
exports.ForgotPasswordDocument = graphql_tag_1.default `
    mutation forgotPassword($email: String!) {
  forgotPassword(email: $email)
}
    `;
function useForgotPasswordMutation(baseOptions) {
    return ApolloReactHooks.useMutation(exports.ForgotPasswordDocument, baseOptions);
}
exports.useForgotPasswordMutation = useForgotPasswordMutation;
exports.LoginDocument = graphql_tag_1.default `
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    errors {
      path
      message
    }
    sessionID
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
    mutation Register($username: String!, $email: String!, $password: String!, $confirmPassword: String!) {
  register(username: $username, email: $email, password: $password, confirmPassword: $confirmPassword) {
    path
    message
  }
}
    `;
function useRegisterMutation(baseOptions) {
    return ApolloReactHooks.useMutation(exports.RegisterDocument, baseOptions);
}
exports.useRegisterMutation = useRegisterMutation;
exports.UploadS3Document = graphql_tag_1.default `
    mutation uploadS3($filename: String!, $filetype: String!) {
  signS3(filename: $filename, filetype: $filetype) {
    url
    signedRequest
  }
}
    `;
function useUploadS3Mutation(baseOptions) {
    return ApolloReactHooks.useMutation(exports.UploadS3Document, baseOptions);
}
exports.useUploadS3Mutation = useUploadS3Mutation;
//# sourceMappingURL=graphql-hooks.js.map