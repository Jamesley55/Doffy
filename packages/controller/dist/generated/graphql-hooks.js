var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import gql from 'graphql-tag';
import * as ApolloReactHooks from '@apollo/react-hooks';
export var CacheControlScope;
(function (CacheControlScope) {
    CacheControlScope["Public"] = "PUBLIC";
    CacheControlScope["Private"] = "PRIVATE";
})(CacheControlScope || (CacheControlScope = {}));
export var LoginDocument = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    mutation Login($email: String!, $password: String!) {\n  login(email: $email, password: $password) {\n    id\n    email\n  }\n}\n    "], ["\n    mutation Login($email: String!, $password: String!) {\n  login(email: $email, password: $password) {\n    id\n    email\n  }\n}\n    "])));
/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions) {
    return ApolloReactHooks.useMutation(LoginDocument, baseOptions);
}
export var RegisterDocument = gql(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    mutation Register($email: String!, $password: String!, $password2: String!) {\n  register(email: $email, password: $password, password2: $password2)\n}\n    "], ["\n    mutation Register($email: String!, $password: String!, $password2: String!) {\n  register(email: $email, password: $password, password2: $password2)\n}\n    "])));
/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      password2: // value for 'password2'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions) {
    return ApolloReactHooks.useMutation(RegisterDocument, baseOptions);
}
var templateObject_1, templateObject_2;
//# sourceMappingURL=graphql-hooks.js.map