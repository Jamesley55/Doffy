import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export declare type Maybe<T> = T | null;
export declare type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
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
export declare type QueryQueryVariables = {};
export declare type QueryQuery = ({
    __typename?: 'Query';
} & {
    me?: Maybe<({
        __typename?: 'User';
    } & Pick<User, 'id'>)>;
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
export declare function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>): ApolloReactHooks.MutationTuple<LoginMutation, LoginMutationVariables>;
export declare type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export declare type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export declare type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export declare const QueryDocument: import("graphql").DocumentNode;
export declare function useQueryQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<QueryQuery, QueryQueryVariables>): ApolloReactCommon.QueryResult<QueryQuery, QueryQueryVariables>;
export declare function useQueryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<QueryQuery, QueryQueryVariables>): ApolloReactHooks.QueryTuple<QueryQuery, QueryQueryVariables>;
export declare type QueryQueryHookResult = ReturnType<typeof useQueryQuery>;
export declare type QueryLazyQueryHookResult = ReturnType<typeof useQueryLazyQuery>;
export declare type QueryQueryResult = ApolloReactCommon.QueryResult<QueryQuery, QueryQueryVariables>;
export declare const RegisterDocument: import("graphql").DocumentNode;
export declare type RegisterMutationFn = ApolloReactCommon.MutationFunction<RegisterMutation, RegisterMutationVariables>;
export declare function useRegisterMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RegisterMutation, RegisterMutationVariables>): ApolloReactHooks.MutationTuple<RegisterMutation, RegisterMutationVariables>;
export declare type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export declare type RegisterMutationResult = ApolloReactCommon.MutationResult<RegisterMutation>;
export declare type RegisterMutationOptions = ApolloReactCommon.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
