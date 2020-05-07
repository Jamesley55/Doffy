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
export declare type User = {
    __typename?: 'User';
    id: Scalars['ID'];
    username: Scalars['String'];
    email: Scalars['String'];
};
export declare type Query = {
    __typename?: 'Query';
    me?: Maybe<User>;
};
export declare type Error = {
    __typename?: 'Error';
    path: Scalars['String'];
    message: Scalars['String'];
};
export declare type LoginResponse = {
    __typename?: 'LoginResponse';
    errors?: Maybe<Array<Error>>;
    sessionID?: Maybe<Scalars['String']>;
};
export declare type RegisterResponse = {
    __typename?: 'RegisterResponse';
    errors?: Maybe<Array<Error>>;
    user?: Maybe<User>;
};
export declare type CreateServices = {
    name: Scalars['String'];
    category: Scalars['String'];
    description: Scalars['String'];
    coutryId?: Maybe<Scalars['String']>;
    stateId?: Maybe<Scalars['String']>;
    cityId?: Maybe<Scalars['String']>;
    Taxes: Scalars['Boolean'];
    Adress?: Maybe<Scalars['String']>;
    price: Scalars['Float'];
    payoutSchedule: Scalars['String'];
    customerBillingStatement: Scalars['String'];
    latitude?: Maybe<Scalars['Float']>;
    longitude?: Maybe<Scalars['Float']>;
};
export declare type Service = {
    __typename?: 'service';
    Id?: Maybe<Scalars['ID']>;
};
export declare type S3Payload = {
    __typename?: 'S3Payload';
    signedRequest: Scalars['String'];
    url: Scalars['String'];
};
export declare type Mutation = {
    __typename?: 'Mutation';
    register?: Maybe<Array<Maybe<Error>>>;
    login: LoginResponse;
    confirmUser?: Maybe<Scalars['Boolean']>;
    forgotPassword?: Maybe<Scalars['Boolean']>;
    changePassword?: Maybe<User>;
    createService: Scalars['Boolean'];
    signS3: S3Payload;
};
export declare type MutationRegisterArgs = {
    username: Scalars['String'];
    email: Scalars['String'];
    password: Scalars['String'];
    confirmPassword: Scalars['String'];
};
export declare type MutationLoginArgs = {
    email: Scalars['String'];
    password: Scalars['String'];
};
export declare type MutationConfirmUserArgs = {
    token: Scalars['String'];
};
export declare type MutationForgotPasswordArgs = {
    email: Scalars['String'];
};
export declare type MutationChangePasswordArgs = {
    token: Scalars['String'];
    password: Scalars['String'];
};
export declare type MutationCreateServiceArgs = {
    input?: Maybe<CreateServices>;
};
export declare type MutationSignS3Args = {
    filename: Scalars['String'];
    filetype: Scalars['String'];
};
export declare enum CacheControlScope {
    Public = "PUBLIC",
    Private = "PRIVATE"
}
export declare type ChangePasswordMutationVariables = {
    token: Scalars['String'];
    password: Scalars['String'];
};
export declare type ChangePasswordMutation = ({
    __typename?: 'Mutation';
} & {
    changePassword?: Maybe<({
        __typename?: 'User';
    } & Pick<User, 'id' | 'email' | 'username'>)>;
});
export declare type ConfirmUserMutationVariables = {
    token: Scalars['String'];
};
export declare type ConfirmUserMutation = ({
    __typename?: 'Mutation';
} & Pick<Mutation, 'confirmUser'>);
export declare type ForgotPasswordMutationVariables = {
    email: Scalars['String'];
};
export declare type ForgotPasswordMutation = ({
    __typename?: 'Mutation';
} & Pick<Mutation, 'forgotPassword'>);
export declare type LoginMutationVariables = {
    email: Scalars['String'];
    password: Scalars['String'];
};
export declare type LoginMutation = ({
    __typename?: 'Mutation';
} & {
    login: ({
        __typename?: 'LoginResponse';
    } & Pick<LoginResponse, 'sessionID'> & {
        errors?: Maybe<Array<({
            __typename?: 'Error';
        } & Pick<Error, 'path' | 'message'>)>>;
    });
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
    username: Scalars['String'];
    email: Scalars['String'];
    password: Scalars['String'];
    confirmPassword: Scalars['String'];
};
export declare type RegisterMutation = ({
    __typename?: 'Mutation';
} & {
    register?: Maybe<Array<Maybe<({
        __typename?: 'Error';
    } & Pick<Error, 'path' | 'message'>)>>>;
});
export declare type UploadS3MutationVariables = {
    filename: Scalars['String'];
    filetype: Scalars['String'];
};
export declare type UploadS3Mutation = ({
    __typename?: 'Mutation';
} & {
    signS3: ({
        __typename?: 'S3Payload';
    } & Pick<S3Payload, 'url' | 'signedRequest'>);
});
export declare const ChangePasswordDocument: import("graphql").DocumentNode;
export declare type ChangePasswordMutationFn = ApolloReactCommon.MutationFunction<ChangePasswordMutation, ChangePasswordMutationVariables>;
export declare function useChangePasswordMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ChangePasswordMutation, ChangePasswordMutationVariables>): ApolloReactHooks.MutationTuple<ChangePasswordMutation, ChangePasswordMutationVariables>;
export declare type ChangePasswordMutationHookResult = ReturnType<typeof useChangePasswordMutation>;
export declare type ChangePasswordMutationResult = ApolloReactCommon.MutationResult<ChangePasswordMutation>;
export declare type ChangePasswordMutationOptions = ApolloReactCommon.BaseMutationOptions<ChangePasswordMutation, ChangePasswordMutationVariables>;
export declare const ConfirmUserDocument: import("graphql").DocumentNode;
export declare type ConfirmUserMutationFn = ApolloReactCommon.MutationFunction<ConfirmUserMutation, ConfirmUserMutationVariables>;
export declare function useConfirmUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ConfirmUserMutation, ConfirmUserMutationVariables>): ApolloReactHooks.MutationTuple<ConfirmUserMutation, ConfirmUserMutationVariables>;
export declare type ConfirmUserMutationHookResult = ReturnType<typeof useConfirmUserMutation>;
export declare type ConfirmUserMutationResult = ApolloReactCommon.MutationResult<ConfirmUserMutation>;
export declare type ConfirmUserMutationOptions = ApolloReactCommon.BaseMutationOptions<ConfirmUserMutation, ConfirmUserMutationVariables>;
export declare const ForgotPasswordDocument: import("graphql").DocumentNode;
export declare type ForgotPasswordMutationFn = ApolloReactCommon.MutationFunction<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
export declare function useForgotPasswordMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>): ApolloReactHooks.MutationTuple<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
export declare type ForgotPasswordMutationHookResult = ReturnType<typeof useForgotPasswordMutation>;
export declare type ForgotPasswordMutationResult = ApolloReactCommon.MutationResult<ForgotPasswordMutation>;
export declare type ForgotPasswordMutationOptions = ApolloReactCommon.BaseMutationOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
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
export declare const UploadS3Document: import("graphql").DocumentNode;
export declare type UploadS3MutationFn = ApolloReactCommon.MutationFunction<UploadS3Mutation, UploadS3MutationVariables>;
export declare function useUploadS3Mutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UploadS3Mutation, UploadS3MutationVariables>): ApolloReactHooks.MutationTuple<UploadS3Mutation, UploadS3MutationVariables>;
export declare type UploadS3MutationHookResult = ReturnType<typeof useUploadS3Mutation>;
export declare type UploadS3MutationResult = ApolloReactCommon.MutationResult<UploadS3Mutation>;
export declare type UploadS3MutationOptions = ApolloReactCommon.BaseMutationOptions<UploadS3Mutation, UploadS3MutationVariables>;
