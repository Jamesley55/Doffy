import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export declare type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export declare type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    /** The `Upload` scalar type represents a file upload. */
    Upload: any;
};
export declare type Query = {
    __typename?: 'Query';
    me?: Maybe<User>;
};
export declare type User = {
    __typename?: 'User';
    id: Scalars['ID'];
    email: Scalars['String'];
};
export declare type Mutation = {
    __typename?: 'Mutation';
    register: Scalars['Boolean'];
    login?: Maybe<User>;
};
export declare type MutationRegisterArgs = {
    email: Scalars['String'];
    password: Scalars['String'];
    password2: Scalars['String'];
};
export declare type MutationLoginArgs = {
    email: Scalars['String'];
    password: Scalars['String'];
};
export declare enum CacheControlScope {
    Public = "PUBLIC",
    Private = "PRIVATE"
}
export declare type LoginMutationVariables = {
    email: Scalars['String'];
    password: Scalars['String'];
};
export declare type LoginMutation = ({
    __typename?: 'Mutation';
} & {
    login?: Maybe<({
        __typename?: 'User';
    } & Pick<User, 'id' | 'email'>)>;
});
export declare type RegisterMutationVariables = {
    email: Scalars['String'];
    password: Scalars['String'];
    password2: Scalars['String'];
};
export declare type RegisterMutation = ({
    __typename?: 'Mutation';
} & Pick<Mutation, 'register'>);
export declare const LoginDocument: import("graphql").DocumentNode;
export declare type LoginMutationFn = ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>;
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
export declare function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>): ApolloReactHooks.MutationTuple<LoginMutation, LoginMutationVariables>;
export declare type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export declare type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export declare type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export declare const RegisterDocument: import("graphql").DocumentNode;
export declare type RegisterMutationFn = ApolloReactCommon.MutationFunction<RegisterMutation, RegisterMutationVariables>;
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
export declare function useRegisterMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RegisterMutation, RegisterMutationVariables>): ApolloReactHooks.MutationTuple<RegisterMutation, RegisterMutationVariables>;
export declare type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export declare type RegisterMutationResult = ApolloReactCommon.MutationResult<RegisterMutation>;
export declare type RegisterMutationOptions = ApolloReactCommon.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
