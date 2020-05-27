export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: "Mutation";
  changePassword?: Maybe<User>;
  confirmUser?: Maybe<Scalars["Boolean"]>;
  createMessage: Scalars["Boolean"];
  createService: Scalars["Boolean"];
  forgotPassword?: Maybe<Scalars["Boolean"]>;
  login: LoginResponse;
  register?: Maybe<Array<RegisterResponse>>;
  signS3: S3Payload;
};

export type MutationChangePasswordArgs = {
  token: Scalars["String"];
  password: Scalars["String"];
};

export type MutationConfirmUserArgs = {
  token: Scalars["String"];
};

export type MutationCreateMessageArgs = {
  message?: Maybe<MessageInput>;
};

export type MutationCreateServiceArgs = {
  input?: Maybe<CreateServices>;
};

export type MutationForgotPasswordArgs = {
  email: Scalars["String"];
};

export type MutationLoginArgs = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type MutationRegisterArgs = {
  username: Scalars["String"];
  email: Scalars["String"];
  password: Scalars["String"];
  confirmPassword: Scalars["String"];
};

export type MutationSignS3Args = {
  filename: Scalars["String"];
  filetype: Scalars["String"];
};

export type Error = {
  __typename?: "Error";
  message: Scalars["String"];
  path: Scalars["String"];
};

export type LoginResponse = {
  __typename?: "LoginResponse";
  errors?: Maybe<Array<Error>>;
  sessionId?: Maybe<Scalars["String"]>;
};

export type Query = {
  __typename?: "Query";
  me?: Maybe<User>;
  messages: Array<Message>;
};

export type QueryMessagesArgs = {
  serviceId: Scalars["String"];
};

export type RegisterResponse = {
  __typename?: "RegisterResponse";
  errors?: Maybe<Array<Error>>;
  sessionId?: Maybe<Scalars["String"]>;
};

export type MessageInput = {
  content: Scalars["String"];
  serviceId: Scalars["String"];
};

export type Message = {
  __typename?: "Message";
  content: Scalars["String"];
  serviceId: Scalars["String"];
};

export type Subscription = {
  __typename?: "Subscription";
  newMessage: Message;
};

export type SubscriptionNewMessageArgs = {
  serviceId: Scalars["String"];
};

export type User = {
  __typename?: "User";
  email: Scalars["String"];
  id: Scalars["ID"];
  username?: Maybe<Scalars["String"]>;
};

export type S3Payload = {
  __typename?: "S3Payload";
  signedRequest: Scalars["String"];
  url: Scalars["String"];
};

export type CreateServices = {
  name: Scalars["String"];
  category: Scalars["String"];
  description: Scalars["String"];
  coutryId?: Maybe<Scalars["String"]>;
  stateId?: Maybe<Scalars["String"]>;
  cityId?: Maybe<Scalars["String"]>;
  Taxes: Scalars["Boolean"];
  Adress?: Maybe<Scalars["String"]>;
  price: Scalars["Float"];
  payoutSchedule: Scalars["String"];
  customerBillingStatement: Scalars["String"];
  latitude?: Maybe<Scalars["Float"]>;
  longitude?: Maybe<Scalars["Float"]>;
};
