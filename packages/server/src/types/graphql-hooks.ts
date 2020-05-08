import gql from 'graphql-tag';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type User = {
   __typename?: 'User';
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
};

export type Message = {
   __typename?: 'Message';
  text: Scalars['String'];
  userId: Scalars['String'];
  bookingId: Scalars['String'];
};

export type Query = {
   __typename?: 'Query';
  me?: Maybe<User>;
  messages: Array<Message>;
};


export type QueryMessagesArgs = {
  bookingId: Scalars['String'];
};

export type Error = {
   __typename?: 'Error';
  path: Scalars['String'];
  message: Scalars['String'];
};

export type LoginResponse = {
   __typename?: 'LoginResponse';
  errors?: Maybe<Array<Error>>;
  sessionID?: Maybe<Scalars['String']>;
};

export type RegisterResponse = {
   __typename?: 'RegisterResponse';
  errors?: Maybe<Array<Error>>;
  user?: Maybe<User>;
};

export type CreateServices = {
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

export type Service = {
   __typename?: 'service';
  Id?: Maybe<Scalars['ID']>;
};

export type S3Payload = {
   __typename?: 'S3Payload';
  signedRequest: Scalars['String'];
  url: Scalars['String'];
};

export type MessageInput = {
  text: Scalars['String'];
  bookingId: Scalars['String'];
};

export type Mutation = {
   __typename?: 'Mutation';
  register?: Maybe<Array<Maybe<Error>>>;
  login: LoginResponse;
  confirmUser?: Maybe<Scalars['Boolean']>;
  forgotPassword?: Maybe<Scalars['Boolean']>;
  changePassword?: Maybe<User>;
  createService: Scalars['Boolean'];
  signS3: S3Payload;
  createMessage: Scalars['Boolean'];
};


export type MutationRegisterArgs = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  confirmPassword: Scalars['String'];
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationConfirmUserArgs = {
  token: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationChangePasswordArgs = {
  token: Scalars['String'];
  password: Scalars['String'];
};


export type MutationCreateServiceArgs = {
  input?: Maybe<CreateServices>;
};


export type MutationSignS3Args = {
  filename: Scalars['String'];
  filetype: Scalars['String'];
};


export type MutationCreateMessageArgs = {
  message: MessageInput;
};


