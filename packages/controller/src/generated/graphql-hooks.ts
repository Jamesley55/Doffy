import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  errors?: Maybe<Array<Error>>;
  sessionId?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  login: LoginResponse;
  logout?: Maybe<Scalars['Boolean']>;
  register: RegisterResponse;
  createMessage: Scalars['Boolean'];
  forgotPassword?: Maybe<Scalars['Boolean']>;
  changePassword?: Maybe<User>;
  signS3: S3Payload;
  findUrl?: Maybe<Array<Scalars['String']>>;
  createService: Scalars['Boolean'];
  DeleteService?: Maybe<Scalars['Boolean']>;
  updateService: Scalars['Boolean'];
  createNotification: Scalars['Boolean'];
  createBooking?: Maybe<BookingResponse>;
  updateBooking?: Maybe<Scalars['Boolean']>;
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationRegisterArgs = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  confirmPassword: Scalars['String'];
};


export type MutationCreateMessageArgs = {
  message?: Maybe<MessageInput>;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationChangePasswordArgs = {
  token: Scalars['Int'];
  password: Scalars['String'];
};


export type MutationSignS3Args = {
  filename: Scalars['String'];
  filetype: Scalars['String'];
};


export type MutationFindUrlArgs = {
  serviceId: Scalars['String'];
};


export type MutationCreateServiceArgs = {
  inputService?: Maybe<CreateServices>;
  ScheduleBool?: Maybe<Schedulebool>;
  ScheduleTime?: Maybe<ScheduleTime>;
};


export type MutationDeleteServiceArgs = {
  ServiceId: Scalars['String'];
};


export type MutationUpdateServiceArgs = {
  serviceId: Scalars['String'];
  inputService?: Maybe<UpdateServices>;
  ScheduleBool?: Maybe<Schedulebool>;
  ScheduleTime?: Maybe<ScheduleTime>;
};


export type MutationCreateNotificationArgs = {
  input?: Maybe<Input>;
};


export type MutationCreateBookingArgs = {
  serviceId: Scalars['String'];
  date: Scalars['String'];
  startService?: Maybe<Scalars['Float']>;
};


export type MutationUpdateBookingArgs = {
  NotificationId: Scalars['String'];
  response?: Maybe<Scalars['Boolean']>;
};

export type Error = {
  __typename?: 'Error';
  path: Scalars['String'];
  message: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  username?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  service?: Maybe<Service>;
  notification?: Maybe<Array<Notification>>;
  messages?: Maybe<Array<Message>>;
  userType?: Maybe<Scalars['String']>;
  sessionId: Scalars['String'];
};

export type RegisterResponse = {
  __typename?: 'RegisterResponse';
  errors?: Maybe<Array<Error>>;
  sessionId?: Maybe<Scalars['String']>;
};

export type Me = {
  __typename?: 'Me';
  user?: Maybe<User>;
  sessionId?: Maybe<Scalars['String']>;
  service?: Maybe<Array<Maybe<Service>>>;
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<Me>;
  messages: Array<Message>;
  searchServicesUser?: Maybe<ServiceUser>;
  ServiceUser?: Maybe<User>;
  ServiceByCategory?: Maybe<Array<Maybe<Service>>>;
  findServiceCalendar?: Maybe<Calendar>;
  notification: Array<Notification>;
  QueryBooking?: Maybe<Array<Booking>>;
  QueryBookingTime?: Maybe<Array<Scalars['String']>>;
};


export type QuerySearchServicesUserArgs = {
  search: Scalars['String'];
  offset?: Maybe<Scalars['Int']>;
  limit: Scalars['Int'];
};


export type QueryServiceUserArgs = {
  ServiceId: Scalars['String'];
};


export type QueryServiceByCategoryArgs = {
  category: Scalars['String'];
};


export type QueryFindServiceCalendarArgs = {
  ServiceId: Scalars['String'];
};


export type QueryQueryBookingArgs = {
  serviceId: Scalars['String'];
  date: Scalars['String'];
};


export type QueryQueryBookingTimeArgs = {
  serviceId: Scalars['String'];
  date: Scalars['String'];
};

export type Service = {
  __typename?: 'Service';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  pictureUrl?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  coutryId?: Maybe<Scalars['String']>;
  stateId?: Maybe<Scalars['String']>;
  cityId?: Maybe<Scalars['String']>;
  Taxes?: Maybe<Scalars['Boolean']>;
  Adress?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Float']>;
  payoutSchedule?: Maybe<Scalars['String']>;
  customerBillingStatement?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  ownerId?: Maybe<Scalars['String']>;
  profilPicture?: Maybe<Scalars['String']>;
  picturesUrl?: Maybe<Array<Scalars['String']>>;
  adresseVisible: Scalars['Boolean'];
  averageTime: Scalars['Float'];
};

export type Notification = {
  __typename?: 'Notification';
  message?: Maybe<NotificationMessage>;
  senderId: Scalars['String'];
  recipientId: Scalars['String'];
  createdDate: Scalars['String'];
  bookRequest?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
};

export type Message = {
  __typename?: 'Message';
  content: Scalars['String'];
  senderId: Scalars['String'];
  recipientId: Scalars['String'];
  createdAt: Scalars['String'];
};

export type NotificationMessage = {
  __typename?: 'NotificationMessage';
  Title?: Maybe<Scalars['String']>;
  Body?: Maybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  newMessage: Message;
  newNotification: Notification;
};


export type SubscriptionNewMessageArgs = {
  recipientId: Scalars['String'];
};


export type SubscriptionNewNotificationArgs = {
  recipientId: Scalars['String'];
};

export type MessageInput = {
  content: Scalars['String'];
  recipientId: Scalars['String'];
};

export type S3Payload = {
  __typename?: 'S3Payload';
  signedRequest: Scalars['String'];
  url: Scalars['String'];
};

export type CreateServices = {
  name: Scalars['String'];
  category: Scalars['String'];
  description: Scalars['String'];
  coutryId: Scalars['String'];
  stateId: Scalars['String'];
  cityId: Scalars['String'];
  Taxes?: Maybe<Scalars['Boolean']>;
  Adress: Scalars['String'];
  price: Scalars['Float'];
  payoutSchedule?: Maybe<Scalars['String']>;
  customerBillingStatement?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  profilPicture: Scalars['String'];
  picturesUrl: Scalars['String'];
  adresseVisible: Scalars['Boolean'];
  averageTime: Scalars['Float'];
};

export type Schedulebool = {
  monday?: Maybe<Scalars['Boolean']>;
  tuesday?: Maybe<Scalars['Boolean']>;
  wednesday?: Maybe<Scalars['Boolean']>;
  thusday?: Maybe<Scalars['Boolean']>;
  friday?: Maybe<Scalars['Boolean']>;
  saturday?: Maybe<Scalars['Boolean']>;
  sunday?: Maybe<Scalars['Boolean']>;
};

export type ScheduleTime = {
  mondaySchedule?: Maybe<StartEnd>;
  tuesdaySchedule?: Maybe<StartEnd>;
  wednesdaySchedule?: Maybe<StartEnd>;
  thursdaySchedule?: Maybe<StartEnd>;
  fridaySchedule?: Maybe<StartEnd>;
  saturdaySchedule?: Maybe<StartEnd>;
  sundaySchedule?: Maybe<StartEnd>;
};

export type UpdateServices = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  coutryId?: Maybe<Scalars['String']>;
  stateId?: Maybe<Scalars['String']>;
  cityId?: Maybe<Scalars['String']>;
  Taxes?: Maybe<Scalars['Boolean']>;
  Adress?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  payoutSchedule?: Maybe<Scalars['String']>;
  customerBillingStatement?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type ServiceUser = {
  __typename?: 'ServiceUser';
  user: Array<User>;
  service: Array<Service>;
};

export type Calendar = {
  __typename?: 'Calendar';
  CalendarId?: Maybe<Scalars['String']>;
  monday?: Maybe<Scalars['Boolean']>;
  mondaySchedule?: Maybe<Time>;
  tuesday?: Maybe<Scalars['Boolean']>;
  tuesdaySchedule?: Maybe<Time>;
  wednesday?: Maybe<Scalars['Boolean']>;
  wednesdaySchedule?: Maybe<Time>;
  thursday?: Maybe<Scalars['Boolean']>;
  thursdaySchedule?: Maybe<Time>;
  friday?: Maybe<Scalars['Boolean']>;
  fridaySchedule?: Maybe<Time>;
  saturday?: Maybe<Scalars['Boolean']>;
  saturdaySchedule?: Maybe<Time>;
  sunday?: Maybe<Scalars['Boolean']>;
  sundaySchedule?: Maybe<Time>;
};

export type StartEnd = {
  StartTime?: Maybe<Scalars['Float']>;
  EndTime?: Maybe<Scalars['Float']>;
};

export type Time = {
  __typename?: 'Time';
  StartTime?: Maybe<Scalars['String']>;
  EndTime?: Maybe<Scalars['String']>;
};

export type Input = {
  BookingRequest: Scalars['Boolean'];
  recipientId: Scalars['String'];
  message?: Maybe<MessageNotif>;
};

export type MessageNotif = {
  Title?: Maybe<Scalars['String']>;
  Body?: Maybe<Scalars['String']>;
};

export type BookingResponse = {
  __typename?: 'BookingResponse';
  errors?: Maybe<Error>;
  booking?: Maybe<Booking>;
};

export type Booking = {
  __typename?: 'Booking';
  startService?: Maybe<Scalars['Float']>;
  endService?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  taxes?: Maybe<Scalars['Float']>;
  depositAmount?: Maybe<Scalars['Float']>;
  isRefund?: Maybe<Scalars['Boolean']>;
  transactionFee?: Maybe<Scalars['Float']>;
  Total?: Maybe<Scalars['Float']>;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}


export type ChangePasswordMutationVariables = Exact<{
  token: Scalars['Int'];
  password: Scalars['String'];
}>;


export type ChangePasswordMutation = (
  { __typename?: 'Mutation' }
  & { changePassword?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email' | 'username' | 'sessionId'>
  )> }
);

export type CreateBookingMutationVariables = Exact<{
  serviceId: Scalars['String'];
  date: Scalars['String'];
  startService: Scalars['Float'];
}>;


export type CreateBookingMutation = (
  { __typename?: 'Mutation' }
  & { createBooking?: Maybe<(
    { __typename?: 'BookingResponse' }
    & { errors?: Maybe<(
      { __typename?: 'Error' }
      & Pick<Error, 'path' | 'message'>
    )>, booking?: Maybe<(
      { __typename?: 'Booking' }
      & Pick<Booking, 'startService' | 'endService' | 'price' | 'taxes' | 'depositAmount' | 'isRefund' | 'transactionFee' | 'Total'>
    )> }
  )> }
);

export type CreateMessageMutationVariables = Exact<{
  content: Scalars['String'];
  recipientId: Scalars['String'];
}>;


export type CreateMessageMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'createMessage'>
);

export type CreateNotificationMutationVariables = Exact<{
  input?: Maybe<Input>;
}>;


export type CreateNotificationMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'createNotification'>
);

export type CreateServiceMutationVariables = Exact<{
  inputService?: Maybe<CreateServices>;
  ScheduleBool?: Maybe<Schedulebool>;
  ScheduleTime?: Maybe<ScheduleTime>;
}>;


export type CreateServiceMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'createService'>
);

export type DeleteServiceMutationVariables = Exact<{
  ServiceId: Scalars['String'];
}>;


export type DeleteServiceMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'DeleteService'>
);

export type FindServiceCalendarQueryVariables = Exact<{
  ServiceId: Scalars['String'];
}>;


export type FindServiceCalendarQuery = (
  { __typename?: 'Query' }
  & { findServiceCalendar?: Maybe<(
    { __typename?: 'Calendar' }
    & Pick<Calendar, 'CalendarId' | 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday'>
    & { mondaySchedule?: Maybe<(
      { __typename?: 'Time' }
      & Pick<Time, 'StartTime' | 'EndTime'>
    )>, tuesdaySchedule?: Maybe<(
      { __typename?: 'Time' }
      & Pick<Time, 'StartTime' | 'EndTime'>
    )>, wednesdaySchedule?: Maybe<(
      { __typename?: 'Time' }
      & Pick<Time, 'StartTime' | 'EndTime'>
    )>, thursdaySchedule?: Maybe<(
      { __typename?: 'Time' }
      & Pick<Time, 'StartTime' | 'EndTime'>
    )>, fridaySchedule?: Maybe<(
      { __typename?: 'Time' }
      & Pick<Time, 'StartTime' | 'EndTime'>
    )>, saturdaySchedule?: Maybe<(
      { __typename?: 'Time' }
      & Pick<Time, 'StartTime' | 'EndTime'>
    )>, sundaySchedule?: Maybe<(
      { __typename?: 'Time' }
      & Pick<Time, 'StartTime' | 'EndTime'>
    )> }
  )> }
);

export type FindUrlMutationVariables = Exact<{
  serviceId: Scalars['String'];
}>;


export type FindUrlMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'findUrl'>
);

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ForgotPasswordMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'forgotPassword'>
);

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'LoginResponse' }
    & Pick<LoginResponse, 'sessionId'>
    & { errors?: Maybe<Array<(
      { __typename?: 'Error' }
      & Pick<Error, 'path' | 'message'>
    )>> }
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'Me' }
    & Pick<Me, 'sessionId'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email' | 'username' | 'userType'>
      & { service?: Maybe<(
        { __typename?: 'Service' }
        & Pick<Service, 'id' | 'name' | 'pictureUrl' | 'description' | 'coutryId' | 'stateId' | 'cityId' | 'Taxes' | 'Adress' | 'rating' | 'price' | 'ownerId'>
      )>, notification?: Maybe<Array<(
        { __typename?: 'Notification' }
        & Pick<Notification, 'senderId' | 'recipientId'>
        & { message?: Maybe<(
          { __typename?: 'NotificationMessage' }
          & Pick<NotificationMessage, 'Title' | 'Body'>
        )> }
      )>>, messages?: Maybe<Array<(
        { __typename?: 'Message' }
        & Pick<Message, 'content' | 'senderId' | 'recipientId' | 'createdAt'>
      )>> }
    )>, service?: Maybe<Array<Maybe<(
      { __typename?: 'Service' }
      & Pick<Service, 'id' | 'name' | 'pictureUrl' | 'description' | 'coutryId' | 'stateId' | 'cityId' | 'Taxes' | 'Adress' | 'rating' | 'price' | 'ownerId'>
    )>>> }
  )> }
);

export type MessageQueryVariables = Exact<{ [key: string]: never; }>;


export type MessageQuery = (
  { __typename?: 'Query' }
  & { messages: Array<(
    { __typename?: 'Message' }
    & Pick<Message, 'content' | 'senderId' | 'recipientId' | 'createdAt'>
  )> }
);

export type NotificationQueryVariables = Exact<{ [key: string]: never; }>;


export type NotificationQuery = (
  { __typename?: 'Query' }
  & { notification: Array<(
    { __typename?: 'Notification' }
    & Pick<Notification, 'senderId' | 'recipientId' | 'createdDate' | 'id' | 'bookRequest'>
    & { message?: Maybe<(
      { __typename?: 'NotificationMessage' }
      & Pick<NotificationMessage, 'Title' | 'Body'>
    )> }
  )> }
);

export type NewNotificationSubscriptionVariables = Exact<{
  recipientId: Scalars['String'];
}>;


export type NewNotificationSubscription = (
  { __typename?: 'Subscription' }
  & { newNotification: (
    { __typename?: 'Notification' }
    & Pick<Notification, 'id' | 'bookRequest' | 'createdDate'>
  ) }
);

export type QueryBookingQueryVariables = Exact<{
  serviceId: Scalars['String'];
  date: Scalars['String'];
}>;


export type QueryBookingQuery = (
  { __typename?: 'Query' }
  & { QueryBooking?: Maybe<Array<(
    { __typename?: 'Booking' }
    & Pick<Booking, 'startService' | 'endService' | 'price' | 'taxes' | 'depositAmount' | 'isRefund' | 'transactionFee' | 'Total'>
  )>> }
);

export type QueryBookingTimeQueryVariables = Exact<{
  serviceId: Scalars['String'];
  date: Scalars['String'];
}>;


export type QueryBookingTimeQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'QueryBookingTime'>
);

export type RegisterMutationVariables = Exact<{
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  confirmPassword: Scalars['String'];
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'RegisterResponse' }
    & Pick<RegisterResponse, 'sessionId'>
    & { errors?: Maybe<Array<(
      { __typename?: 'Error' }
      & Pick<Error, 'path' | 'message'>
    )>> }
  ) }
);

export type SearchServicesUserQueryVariables = Exact<{
  search: Scalars['String'];
  offset?: Maybe<Scalars['Int']>;
  limit: Scalars['Int'];
}>;


export type SearchServicesUserQuery = (
  { __typename?: 'Query' }
  & { searchServicesUser?: Maybe<(
    { __typename?: 'ServiceUser' }
    & { user: Array<(
      { __typename?: 'User' }
      & Pick<User, 'username' | 'email'>
      & { service?: Maybe<(
        { __typename?: 'Service' }
        & Pick<Service, 'id' | 'name' | 'description' | 'coutryId' | 'stateId' | 'cityId' | 'Taxes' | 'Adress' | 'rating' | 'price' | 'ownerId'>
      )> }
    )>, service: Array<(
      { __typename?: 'Service' }
      & Pick<Service, 'id' | 'name' | 'description' | 'coutryId' | 'stateId' | 'cityId' | 'Taxes' | 'Adress' | 'rating' | 'price' | 'ownerId'>
    )> }
  )> }
);

export type ServiceByCategoryQueryVariables = Exact<{
  category: Scalars['String'];
}>;


export type ServiceByCategoryQuery = (
  { __typename?: 'Query' }
  & { ServiceByCategory?: Maybe<Array<Maybe<(
    { __typename?: 'Service' }
    & Pick<Service, 'id' | 'name' | 'category' | 'description' | 'coutryId' | 'stateId' | 'cityId' | 'Taxes' | 'Adress' | 'rating' | 'price' | 'payoutSchedule' | 'customerBillingStatement' | 'latitude' | 'longitude' | 'ownerId' | 'profilPicture' | 'picturesUrl' | 'adresseVisible' | 'averageTime'>
  )>>> }
);

export type ServicesUserQueryVariables = Exact<{
  ServiceId: Scalars['String'];
}>;


export type ServicesUserQuery = (
  { __typename?: 'Query' }
  & { ServiceUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'email'>
    & { service?: Maybe<(
      { __typename?: 'Service' }
      & Pick<Service, 'id' | 'name' | 'description' | 'coutryId' | 'stateId' | 'cityId' | 'Taxes' | 'Adress' | 'rating' | 'price' | 'ownerId'>
    )> }
  )> }
);

export type SignS3MutationVariables = Exact<{
  filename: Scalars['String'];
  filetype: Scalars['String'];
}>;


export type SignS3Mutation = (
  { __typename?: 'Mutation' }
  & { signS3: (
    { __typename?: 'S3Payload' }
    & Pick<S3Payload, 'url' | 'signedRequest'>
  ) }
);

export type UpdateBookingMutationVariables = Exact<{
  NotificationId: Scalars['String'];
  response?: Maybe<Scalars['Boolean']>;
}>;


export type UpdateBookingMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'updateBooking'>
);

export type UpdateServiceMutationVariables = Exact<{
  serviceId: Scalars['String'];
  inputService?: Maybe<UpdateServices>;
  ScheduleBool?: Maybe<Schedulebool>;
  ScheduleTime?: Maybe<ScheduleTime>;
}>;


export type UpdateServiceMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'updateService'>
);


export const ChangePasswordDocument = gql`
    mutation changePassword($token: Int!, $password: String!) {
  changePassword(token: $token, password: $password) {
    id
    email
    username
    sessionId
  }
}
    `;
export type ChangePasswordMutationFn = ApolloReactCommon.MutationFunction<ChangePasswordMutation, ChangePasswordMutationVariables>;

/**
 * __useChangePasswordMutation__
 *
 * To run a mutation, you first call `useChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordMutation, { data, loading, error }] = useChangePasswordMutation({
 *   variables: {
 *      token: // value for 'token'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useChangePasswordMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ChangePasswordMutation, ChangePasswordMutationVariables>) {
        return ApolloReactHooks.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument, baseOptions);
      }
export type ChangePasswordMutationHookResult = ReturnType<typeof useChangePasswordMutation>;
export type ChangePasswordMutationResult = ApolloReactCommon.MutationResult<ChangePasswordMutation>;
export type ChangePasswordMutationOptions = ApolloReactCommon.BaseMutationOptions<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const CreateBookingDocument = gql`
    mutation createBooking($serviceId: String!, $date: String!, $startService: Float!) {
  createBooking(serviceId: $serviceId, date: $date, startService: $startService) {
    errors {
      path
      message
    }
    booking {
      startService
      endService
      price
      taxes
      depositAmount
      isRefund
      transactionFee
      Total
    }
  }
}
    `;
export type CreateBookingMutationFn = ApolloReactCommon.MutationFunction<CreateBookingMutation, CreateBookingMutationVariables>;

/**
 * __useCreateBookingMutation__
 *
 * To run a mutation, you first call `useCreateBookingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBookingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBookingMutation, { data, loading, error }] = useCreateBookingMutation({
 *   variables: {
 *      serviceId: // value for 'serviceId'
 *      date: // value for 'date'
 *      startService: // value for 'startService'
 *   },
 * });
 */
export function useCreateBookingMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateBookingMutation, CreateBookingMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateBookingMutation, CreateBookingMutationVariables>(CreateBookingDocument, baseOptions);
      }
export type CreateBookingMutationHookResult = ReturnType<typeof useCreateBookingMutation>;
export type CreateBookingMutationResult = ApolloReactCommon.MutationResult<CreateBookingMutation>;
export type CreateBookingMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateBookingMutation, CreateBookingMutationVariables>;
export const CreateMessageDocument = gql`
    mutation createMessage($content: String!, $recipientId: String!) {
  createMessage(message: {content: $content, recipientId: $recipientId})
}
    `;
export type CreateMessageMutationFn = ApolloReactCommon.MutationFunction<CreateMessageMutation, CreateMessageMutationVariables>;

/**
 * __useCreateMessageMutation__
 *
 * To run a mutation, you first call `useCreateMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMessageMutation, { data, loading, error }] = useCreateMessageMutation({
 *   variables: {
 *      content: // value for 'content'
 *      recipientId: // value for 'recipientId'
 *   },
 * });
 */
export function useCreateMessageMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateMessageMutation, CreateMessageMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateMessageMutation, CreateMessageMutationVariables>(CreateMessageDocument, baseOptions);
      }
export type CreateMessageMutationHookResult = ReturnType<typeof useCreateMessageMutation>;
export type CreateMessageMutationResult = ApolloReactCommon.MutationResult<CreateMessageMutation>;
export type CreateMessageMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateMessageMutation, CreateMessageMutationVariables>;
export const CreateNotificationDocument = gql`
    mutation createNotification($input: input) {
  createNotification(input: $input)
}
    `;
export type CreateNotificationMutationFn = ApolloReactCommon.MutationFunction<CreateNotificationMutation, CreateNotificationMutationVariables>;

/**
 * __useCreateNotificationMutation__
 *
 * To run a mutation, you first call `useCreateNotificationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateNotificationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createNotificationMutation, { data, loading, error }] = useCreateNotificationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateNotificationMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateNotificationMutation, CreateNotificationMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateNotificationMutation, CreateNotificationMutationVariables>(CreateNotificationDocument, baseOptions);
      }
export type CreateNotificationMutationHookResult = ReturnType<typeof useCreateNotificationMutation>;
export type CreateNotificationMutationResult = ApolloReactCommon.MutationResult<CreateNotificationMutation>;
export type CreateNotificationMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateNotificationMutation, CreateNotificationMutationVariables>;
export const CreateServiceDocument = gql`
    mutation createService($inputService: CreateServices, $ScheduleBool: Schedulebool, $ScheduleTime: ScheduleTime) {
  createService(inputService: $inputService, ScheduleBool: $ScheduleBool, ScheduleTime: $ScheduleTime)
}
    `;
export type CreateServiceMutationFn = ApolloReactCommon.MutationFunction<CreateServiceMutation, CreateServiceMutationVariables>;

/**
 * __useCreateServiceMutation__
 *
 * To run a mutation, you first call `useCreateServiceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateServiceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createServiceMutation, { data, loading, error }] = useCreateServiceMutation({
 *   variables: {
 *      inputService: // value for 'inputService'
 *      ScheduleBool: // value for 'ScheduleBool'
 *      ScheduleTime: // value for 'ScheduleTime'
 *   },
 * });
 */
export function useCreateServiceMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateServiceMutation, CreateServiceMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateServiceMutation, CreateServiceMutationVariables>(CreateServiceDocument, baseOptions);
      }
export type CreateServiceMutationHookResult = ReturnType<typeof useCreateServiceMutation>;
export type CreateServiceMutationResult = ApolloReactCommon.MutationResult<CreateServiceMutation>;
export type CreateServiceMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateServiceMutation, CreateServiceMutationVariables>;
export const DeleteServiceDocument = gql`
    mutation DeleteService($ServiceId: String!) {
  DeleteService(ServiceId: $ServiceId)
}
    `;
export type DeleteServiceMutationFn = ApolloReactCommon.MutationFunction<DeleteServiceMutation, DeleteServiceMutationVariables>;

/**
 * __useDeleteServiceMutation__
 *
 * To run a mutation, you first call `useDeleteServiceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteServiceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteServiceMutation, { data, loading, error }] = useDeleteServiceMutation({
 *   variables: {
 *      ServiceId: // value for 'ServiceId'
 *   },
 * });
 */
export function useDeleteServiceMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteServiceMutation, DeleteServiceMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteServiceMutation, DeleteServiceMutationVariables>(DeleteServiceDocument, baseOptions);
      }
export type DeleteServiceMutationHookResult = ReturnType<typeof useDeleteServiceMutation>;
export type DeleteServiceMutationResult = ApolloReactCommon.MutationResult<DeleteServiceMutation>;
export type DeleteServiceMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteServiceMutation, DeleteServiceMutationVariables>;
export const FindServiceCalendarDocument = gql`
    query findServiceCalendar($ServiceId: String!) {
  findServiceCalendar(ServiceId: $ServiceId) {
    CalendarId
    monday
    mondaySchedule {
      StartTime
      EndTime
    }
    tuesday
    tuesdaySchedule {
      StartTime
      EndTime
    }
    wednesday
    wednesdaySchedule {
      StartTime
      EndTime
    }
    thursday
    thursdaySchedule {
      StartTime
      EndTime
    }
    friday
    fridaySchedule {
      StartTime
      EndTime
    }
    saturday
    saturdaySchedule {
      StartTime
      EndTime
    }
    sunday
    sundaySchedule {
      StartTime
      EndTime
    }
  }
}
    `;

/**
 * __useFindServiceCalendarQuery__
 *
 * To run a query within a React component, call `useFindServiceCalendarQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindServiceCalendarQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindServiceCalendarQuery({
 *   variables: {
 *      ServiceId: // value for 'ServiceId'
 *   },
 * });
 */
export function useFindServiceCalendarQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindServiceCalendarQuery, FindServiceCalendarQueryVariables>) {
        return ApolloReactHooks.useQuery<FindServiceCalendarQuery, FindServiceCalendarQueryVariables>(FindServiceCalendarDocument, baseOptions);
      }
export function useFindServiceCalendarLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindServiceCalendarQuery, FindServiceCalendarQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindServiceCalendarQuery, FindServiceCalendarQueryVariables>(FindServiceCalendarDocument, baseOptions);
        }
export type FindServiceCalendarQueryHookResult = ReturnType<typeof useFindServiceCalendarQuery>;
export type FindServiceCalendarLazyQueryHookResult = ReturnType<typeof useFindServiceCalendarLazyQuery>;
export type FindServiceCalendarQueryResult = ApolloReactCommon.QueryResult<FindServiceCalendarQuery, FindServiceCalendarQueryVariables>;
export const FindUrlDocument = gql`
    mutation findUrl($serviceId: String!) {
  findUrl(serviceId: $serviceId)
}
    `;
export type FindUrlMutationFn = ApolloReactCommon.MutationFunction<FindUrlMutation, FindUrlMutationVariables>;

/**
 * __useFindUrlMutation__
 *
 * To run a mutation, you first call `useFindUrlMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFindUrlMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [findUrlMutation, { data, loading, error }] = useFindUrlMutation({
 *   variables: {
 *      serviceId: // value for 'serviceId'
 *   },
 * });
 */
export function useFindUrlMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<FindUrlMutation, FindUrlMutationVariables>) {
        return ApolloReactHooks.useMutation<FindUrlMutation, FindUrlMutationVariables>(FindUrlDocument, baseOptions);
      }
export type FindUrlMutationHookResult = ReturnType<typeof useFindUrlMutation>;
export type FindUrlMutationResult = ApolloReactCommon.MutationResult<FindUrlMutation>;
export type FindUrlMutationOptions = ApolloReactCommon.BaseMutationOptions<FindUrlMutation, FindUrlMutationVariables>;
export const ForgotPasswordDocument = gql`
    mutation forgotPassword($email: String!) {
  forgotPassword(email: $email)
}
    `;
export type ForgotPasswordMutationFn = ApolloReactCommon.MutationFunction<ForgotPasswordMutation, ForgotPasswordMutationVariables>;

/**
 * __useForgotPasswordMutation__
 *
 * To run a mutation, you first call `useForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordMutation, { data, loading, error }] = useForgotPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useForgotPasswordMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>) {
        return ApolloReactHooks.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument, baseOptions);
      }
export type ForgotPasswordMutationHookResult = ReturnType<typeof useForgotPasswordMutation>;
export type ForgotPasswordMutationResult = ApolloReactCommon.MutationResult<ForgotPasswordMutation>;
export type ForgotPasswordMutationOptions = ApolloReactCommon.BaseMutationOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    errors {
      path
      message
    }
    sessionId
  }
}
    `;
export type LoginMutationFn = ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>;

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
export function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation logout {
  logout
}
    `;
export type LogoutMutationFn = ApolloReactCommon.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        return ApolloReactHooks.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, baseOptions);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = ApolloReactCommon.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = ApolloReactCommon.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    user {
      id
      email
      username
      userType
      service {
        id
        name
        pictureUrl
        description
        coutryId
        stateId
        cityId
        Taxes
        Adress
        rating
        price
        ownerId
      }
      notification {
        message {
          Title
          Body
        }
        senderId
        recipientId
      }
      messages {
        content
        senderId
        recipientId
        createdAt
      }
    }
    service {
      id
      name
      pictureUrl
      description
      coutryId
      stateId
      cityId
      Taxes
      Adress
      rating
      price
      ownerId
    }
    sessionId
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MeQuery, MeQueryVariables>) {
        return ApolloReactHooks.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = ApolloReactCommon.QueryResult<MeQuery, MeQueryVariables>;
export const MessageDocument = gql`
    query Message {
  messages {
    content
    senderId
    recipientId
    createdAt
  }
}
    `;

/**
 * __useMessageQuery__
 *
 * To run a query within a React component, call `useMessageQuery` and pass it any options that fit your needs.
 * When your component renders, `useMessageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMessageQuery({
 *   variables: {
 *   },
 * });
 */
export function useMessageQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MessageQuery, MessageQueryVariables>) {
        return ApolloReactHooks.useQuery<MessageQuery, MessageQueryVariables>(MessageDocument, baseOptions);
      }
export function useMessageLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MessageQuery, MessageQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<MessageQuery, MessageQueryVariables>(MessageDocument, baseOptions);
        }
export type MessageQueryHookResult = ReturnType<typeof useMessageQuery>;
export type MessageLazyQueryHookResult = ReturnType<typeof useMessageLazyQuery>;
export type MessageQueryResult = ApolloReactCommon.QueryResult<MessageQuery, MessageQueryVariables>;
export const NotificationDocument = gql`
    query notification {
  notification {
    message {
      Title
      Body
    }
    senderId
    recipientId
    createdDate
    id
    bookRequest
  }
}
    `;

/**
 * __useNotificationQuery__
 *
 * To run a query within a React component, call `useNotificationQuery` and pass it any options that fit your needs.
 * When your component renders, `useNotificationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNotificationQuery({
 *   variables: {
 *   },
 * });
 */
export function useNotificationQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<NotificationQuery, NotificationQueryVariables>) {
        return ApolloReactHooks.useQuery<NotificationQuery, NotificationQueryVariables>(NotificationDocument, baseOptions);
      }
export function useNotificationLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<NotificationQuery, NotificationQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<NotificationQuery, NotificationQueryVariables>(NotificationDocument, baseOptions);
        }
export type NotificationQueryHookResult = ReturnType<typeof useNotificationQuery>;
export type NotificationLazyQueryHookResult = ReturnType<typeof useNotificationLazyQuery>;
export type NotificationQueryResult = ApolloReactCommon.QueryResult<NotificationQuery, NotificationQueryVariables>;
export const NewNotificationDocument = gql`
    subscription newNotification($recipientId: String!) {
  newNotification(recipientId: $recipientId) {
    id
    bookRequest
    createdDate
  }
}
    `;

/**
 * __useNewNotificationSubscription__
 *
 * To run a query within a React component, call `useNewNotificationSubscription` and pass it any options that fit your needs.
 * When your component renders, `useNewNotificationSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewNotificationSubscription({
 *   variables: {
 *      recipientId: // value for 'recipientId'
 *   },
 * });
 */
export function useNewNotificationSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<NewNotificationSubscription, NewNotificationSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<NewNotificationSubscription, NewNotificationSubscriptionVariables>(NewNotificationDocument, baseOptions);
      }
export type NewNotificationSubscriptionHookResult = ReturnType<typeof useNewNotificationSubscription>;
export type NewNotificationSubscriptionResult = ApolloReactCommon.SubscriptionResult<NewNotificationSubscription>;
export const QueryBookingDocument = gql`
    query QueryBooking($serviceId: String!, $date: String!) {
  QueryBooking(serviceId: $serviceId, date: $date) {
    startService
    endService
    price
    taxes
    depositAmount
    isRefund
    transactionFee
    Total
  }
}
    `;

/**
 * __useQueryBookingQuery__
 *
 * To run a query within a React component, call `useQueryBookingQuery` and pass it any options that fit your needs.
 * When your component renders, `useQueryBookingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQueryBookingQuery({
 *   variables: {
 *      serviceId: // value for 'serviceId'
 *      date: // value for 'date'
 *   },
 * });
 */
export function useQueryBookingQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<QueryBookingQuery, QueryBookingQueryVariables>) {
        return ApolloReactHooks.useQuery<QueryBookingQuery, QueryBookingQueryVariables>(QueryBookingDocument, baseOptions);
      }
export function useQueryBookingLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<QueryBookingQuery, QueryBookingQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<QueryBookingQuery, QueryBookingQueryVariables>(QueryBookingDocument, baseOptions);
        }
export type QueryBookingQueryHookResult = ReturnType<typeof useQueryBookingQuery>;
export type QueryBookingLazyQueryHookResult = ReturnType<typeof useQueryBookingLazyQuery>;
export type QueryBookingQueryResult = ApolloReactCommon.QueryResult<QueryBookingQuery, QueryBookingQueryVariables>;
export const QueryBookingTimeDocument = gql`
    query QueryBookingTime($serviceId: String!, $date: String!) {
  QueryBookingTime(serviceId: $serviceId, date: $date)
}
    `;

/**
 * __useQueryBookingTimeQuery__
 *
 * To run a query within a React component, call `useQueryBookingTimeQuery` and pass it any options that fit your needs.
 * When your component renders, `useQueryBookingTimeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQueryBookingTimeQuery({
 *   variables: {
 *      serviceId: // value for 'serviceId'
 *      date: // value for 'date'
 *   },
 * });
 */
export function useQueryBookingTimeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<QueryBookingTimeQuery, QueryBookingTimeQueryVariables>) {
        return ApolloReactHooks.useQuery<QueryBookingTimeQuery, QueryBookingTimeQueryVariables>(QueryBookingTimeDocument, baseOptions);
      }
export function useQueryBookingTimeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<QueryBookingTimeQuery, QueryBookingTimeQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<QueryBookingTimeQuery, QueryBookingTimeQueryVariables>(QueryBookingTimeDocument, baseOptions);
        }
export type QueryBookingTimeQueryHookResult = ReturnType<typeof useQueryBookingTimeQuery>;
export type QueryBookingTimeLazyQueryHookResult = ReturnType<typeof useQueryBookingTimeLazyQuery>;
export type QueryBookingTimeQueryResult = ApolloReactCommon.QueryResult<QueryBookingTimeQuery, QueryBookingTimeQueryVariables>;
export const RegisterDocument = gql`
    mutation Register($username: String!, $email: String!, $password: String!, $confirmPassword: String!) {
  register(username: $username, email: $email, password: $password, confirmPassword: $confirmPassword) {
    errors {
      path
      message
    }
    sessionId
  }
}
    `;
export type RegisterMutationFn = ApolloReactCommon.MutationFunction<RegisterMutation, RegisterMutationVariables>;

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
 *      username: // value for 'username'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      confirmPassword: // value for 'confirmPassword'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        return ApolloReactHooks.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, baseOptions);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = ApolloReactCommon.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = ApolloReactCommon.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const SearchServicesUserDocument = gql`
    query searchServicesUser($search: String!, $offset: Int, $limit: Int!) {
  searchServicesUser(search: $search, offset: $offset, limit: $limit) {
    user {
      username
      email
      service {
        id
        name
        description
        coutryId
        stateId
        cityId
        Taxes
        Adress
        rating
        price
        ownerId
      }
    }
    service {
      id
      name
      description
      coutryId
      stateId
      cityId
      Taxes
      Adress
      rating
      price
      ownerId
    }
  }
}
    `;

/**
 * __useSearchServicesUserQuery__
 *
 * To run a query within a React component, call `useSearchServicesUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchServicesUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchServicesUserQuery({
 *   variables: {
 *      search: // value for 'search'
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useSearchServicesUserQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SearchServicesUserQuery, SearchServicesUserQueryVariables>) {
        return ApolloReactHooks.useQuery<SearchServicesUserQuery, SearchServicesUserQueryVariables>(SearchServicesUserDocument, baseOptions);
      }
export function useSearchServicesUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SearchServicesUserQuery, SearchServicesUserQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SearchServicesUserQuery, SearchServicesUserQueryVariables>(SearchServicesUserDocument, baseOptions);
        }
export type SearchServicesUserQueryHookResult = ReturnType<typeof useSearchServicesUserQuery>;
export type SearchServicesUserLazyQueryHookResult = ReturnType<typeof useSearchServicesUserLazyQuery>;
export type SearchServicesUserQueryResult = ApolloReactCommon.QueryResult<SearchServicesUserQuery, SearchServicesUserQueryVariables>;
export const ServiceByCategoryDocument = gql`
    query ServiceByCategory($category: String!) {
  ServiceByCategory(category: $category) {
    id
    name
    category
    description
    coutryId
    stateId
    cityId
    Taxes
    Adress
    rating
    price
    payoutSchedule
    customerBillingStatement
    latitude
    longitude
    ownerId
    profilPicture
    picturesUrl
    adresseVisible
    averageTime
    category
  }
}
    `;

/**
 * __useServiceByCategoryQuery__
 *
 * To run a query within a React component, call `useServiceByCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useServiceByCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useServiceByCategoryQuery({
 *   variables: {
 *      category: // value for 'category'
 *   },
 * });
 */
export function useServiceByCategoryQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ServiceByCategoryQuery, ServiceByCategoryQueryVariables>) {
        return ApolloReactHooks.useQuery<ServiceByCategoryQuery, ServiceByCategoryQueryVariables>(ServiceByCategoryDocument, baseOptions);
      }
export function useServiceByCategoryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ServiceByCategoryQuery, ServiceByCategoryQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ServiceByCategoryQuery, ServiceByCategoryQueryVariables>(ServiceByCategoryDocument, baseOptions);
        }
export type ServiceByCategoryQueryHookResult = ReturnType<typeof useServiceByCategoryQuery>;
export type ServiceByCategoryLazyQueryHookResult = ReturnType<typeof useServiceByCategoryLazyQuery>;
export type ServiceByCategoryQueryResult = ApolloReactCommon.QueryResult<ServiceByCategoryQuery, ServiceByCategoryQueryVariables>;
export const ServicesUserDocument = gql`
    query ServicesUser($ServiceId: String!) {
  ServiceUser(ServiceId: $ServiceId) {
    id
    username
    email
    service {
      id
      name
      description
      coutryId
      stateId
      cityId
      Taxes
      Adress
      rating
      price
      ownerId
    }
  }
}
    `;

/**
 * __useServicesUserQuery__
 *
 * To run a query within a React component, call `useServicesUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useServicesUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useServicesUserQuery({
 *   variables: {
 *      ServiceId: // value for 'ServiceId'
 *   },
 * });
 */
export function useServicesUserQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ServicesUserQuery, ServicesUserQueryVariables>) {
        return ApolloReactHooks.useQuery<ServicesUserQuery, ServicesUserQueryVariables>(ServicesUserDocument, baseOptions);
      }
export function useServicesUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ServicesUserQuery, ServicesUserQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ServicesUserQuery, ServicesUserQueryVariables>(ServicesUserDocument, baseOptions);
        }
export type ServicesUserQueryHookResult = ReturnType<typeof useServicesUserQuery>;
export type ServicesUserLazyQueryHookResult = ReturnType<typeof useServicesUserLazyQuery>;
export type ServicesUserQueryResult = ApolloReactCommon.QueryResult<ServicesUserQuery, ServicesUserQueryVariables>;
export const SignS3Document = gql`
    mutation signS3($filename: String!, $filetype: String!) {
  signS3(filename: $filename, filetype: $filetype) {
    url
    signedRequest
  }
}
    `;
export type SignS3MutationFn = ApolloReactCommon.MutationFunction<SignS3Mutation, SignS3MutationVariables>;

/**
 * __useSignS3Mutation__
 *
 * To run a mutation, you first call `useSignS3Mutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignS3Mutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signS3Mutation, { data, loading, error }] = useSignS3Mutation({
 *   variables: {
 *      filename: // value for 'filename'
 *      filetype: // value for 'filetype'
 *   },
 * });
 */
export function useSignS3Mutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SignS3Mutation, SignS3MutationVariables>) {
        return ApolloReactHooks.useMutation<SignS3Mutation, SignS3MutationVariables>(SignS3Document, baseOptions);
      }
export type SignS3MutationHookResult = ReturnType<typeof useSignS3Mutation>;
export type SignS3MutationResult = ApolloReactCommon.MutationResult<SignS3Mutation>;
export type SignS3MutationOptions = ApolloReactCommon.BaseMutationOptions<SignS3Mutation, SignS3MutationVariables>;
export const UpdateBookingDocument = gql`
    mutation updateBooking($NotificationId: String!, $response: Boolean) {
  updateBooking(NotificationId: $NotificationId, response: $response)
}
    `;
export type UpdateBookingMutationFn = ApolloReactCommon.MutationFunction<UpdateBookingMutation, UpdateBookingMutationVariables>;

/**
 * __useUpdateBookingMutation__
 *
 * To run a mutation, you first call `useUpdateBookingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBookingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBookingMutation, { data, loading, error }] = useUpdateBookingMutation({
 *   variables: {
 *      NotificationId: // value for 'NotificationId'
 *      response: // value for 'response'
 *   },
 * });
 */
export function useUpdateBookingMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateBookingMutation, UpdateBookingMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateBookingMutation, UpdateBookingMutationVariables>(UpdateBookingDocument, baseOptions);
      }
export type UpdateBookingMutationHookResult = ReturnType<typeof useUpdateBookingMutation>;
export type UpdateBookingMutationResult = ApolloReactCommon.MutationResult<UpdateBookingMutation>;
export type UpdateBookingMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateBookingMutation, UpdateBookingMutationVariables>;
export const UpdateServiceDocument = gql`
    mutation updateService($serviceId: String!, $inputService: UpdateServices, $ScheduleBool: Schedulebool, $ScheduleTime: ScheduleTime) {
  updateService(serviceId: $serviceId, inputService: $inputService, ScheduleBool: $ScheduleBool, ScheduleTime: $ScheduleTime)
}
    `;
export type UpdateServiceMutationFn = ApolloReactCommon.MutationFunction<UpdateServiceMutation, UpdateServiceMutationVariables>;

/**
 * __useUpdateServiceMutation__
 *
 * To run a mutation, you first call `useUpdateServiceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateServiceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateServiceMutation, { data, loading, error }] = useUpdateServiceMutation({
 *   variables: {
 *      serviceId: // value for 'serviceId'
 *      inputService: // value for 'inputService'
 *      ScheduleBool: // value for 'ScheduleBool'
 *      ScheduleTime: // value for 'ScheduleTime'
 *   },
 * });
 */
export function useUpdateServiceMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateServiceMutation, UpdateServiceMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateServiceMutation, UpdateServiceMutationVariables>(UpdateServiceDocument, baseOptions);
      }
export type UpdateServiceMutationHookResult = ReturnType<typeof useUpdateServiceMutation>;
export type UpdateServiceMutationResult = ApolloReactCommon.MutationResult<UpdateServiceMutation>;
export type UpdateServiceMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateServiceMutation, UpdateServiceMutationVariables>;