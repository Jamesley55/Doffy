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
