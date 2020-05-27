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
export declare type LoginResponse = {
    __typename?: 'LoginResponse';
    errors?: Maybe<Array<Error>>;
    sessionId?: Maybe<Scalars['String']>;
};
export declare type Mutation = {
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
export declare type MutationLoginArgs = {
    email: Scalars['String'];
    password: Scalars['String'];
};
export declare type MutationRegisterArgs = {
    username: Scalars['String'];
    email: Scalars['String'];
    password: Scalars['String'];
    confirmPassword: Scalars['String'];
};
export declare type MutationCreateMessageArgs = {
    message?: Maybe<MessageInput>;
};
export declare type MutationForgotPasswordArgs = {
    email: Scalars['String'];
};
export declare type MutationChangePasswordArgs = {
    token: Scalars['Int'];
    password: Scalars['String'];
};
export declare type MutationSignS3Args = {
    filename: Scalars['String'];
    filetype: Scalars['String'];
    id?: Maybe<Scalars['String']>;
};
export declare type MutationFindUrlArgs = {
    serviceId: Scalars['String'];
};
export declare type MutationCreateServiceArgs = {
    inputService?: Maybe<CreateServices>;
    ScheduleBool?: Maybe<Schedulebool>;
    ScheduleTime?: Maybe<ScheduleTime>;
};
export declare type MutationDeleteServiceArgs = {
    ServiceId: Scalars['String'];
};
export declare type MutationUpdateServiceArgs = {
    serviceId: Scalars['String'];
    inputService?: Maybe<UpdateServices>;
    ScheduleBool?: Maybe<Schedulebool>;
    ScheduleTime?: Maybe<ScheduleTime>;
};
export declare type MutationCreateNotificationArgs = {
    input?: Maybe<Input>;
};
export declare type MutationCreateBookingArgs = {
    serviceId: Scalars['String'];
    date: Scalars['String'];
    startService?: Maybe<Scalars['Float']>;
};
export declare type MutationUpdateBookingArgs = {
    NotificationId: Scalars['String'];
    response?: Maybe<Scalars['Boolean']>;
};
export declare type Error = {
    __typename?: 'Error';
    path: Scalars['String'];
    message: Scalars['String'];
};
export declare type User = {
    __typename?: 'User';
    id: Scalars['ID'];
    username?: Maybe<Scalars['String']>;
    email: Scalars['String'];
    service?: Maybe<Service>;
    notification?: Maybe<Array<Notification>>;
    messages?: Maybe<Array<Message>>;
    sessionId: Scalars['String'];
};
export declare type RegisterResponse = {
    __typename?: 'RegisterResponse';
    errors?: Maybe<Array<Error>>;
    sessionId?: Maybe<Scalars['String']>;
};
export declare type Service = {
    __typename?: 'service';
    id?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    pictureUrl?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    coutryId?: Maybe<Scalars['String']>;
    stateId?: Maybe<Scalars['String']>;
    cityId?: Maybe<Scalars['String']>;
    Taxes?: Maybe<Scalars['Boolean']>;
    Adress?: Maybe<Scalars['String']>;
    rating?: Maybe<Scalars['Int']>;
    price?: Maybe<Scalars['Float']>;
    ownerId?: Maybe<Scalars['String']>;
};
export declare type Me = {
    __typename?: 'Me';
    user?: Maybe<User>;
    sessionId?: Maybe<Scalars['String']>;
    service?: Maybe<Array<Maybe<Service>>>;
};
export declare type Query = {
    __typename?: 'Query';
    me?: Maybe<Me>;
    messages: Array<Message>;
    searchServicesUser?: Maybe<ServiceUser>;
    ServiceUser?: Maybe<User>;
    ServiceByCategory?: Maybe<Array<Maybe<Service>>>;
    findServiceCalendar?: Maybe<Calendar>;
    notification: Array<Notification>;
    QueryBooking?: Maybe<Array<Booking>>;
};
export declare type QuerySearchServicesUserArgs = {
    search: Scalars['String'];
    offset?: Maybe<Scalars['Int']>;
    limit: Scalars['Int'];
};
export declare type QueryServiceUserArgs = {
    ServiceId: Scalars['String'];
};
export declare type QueryServiceByCategoryArgs = {
    category: Scalars['String'];
};
export declare type QueryFindServiceCalendarArgs = {
    ServiceId: Scalars['String'];
};
export declare type QueryQueryBookingArgs = {
    serviceId: Scalars['String'];
    date: Scalars['String'];
};
export declare type Service = {
    __typename?: 'Service';
    name?: Maybe<Scalars['String']>;
    category?: Maybe<Scalars['String']>;
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
    id?: Maybe<Scalars['String']>;
    pictureUrl?: Maybe<Scalars['String']>;
    rating?: Maybe<Scalars['Int']>;
    ownerId?: Maybe<Scalars['String']>;
};
export declare type Notification = {
    __typename?: 'Notification';
    message?: Maybe<NotificationMessage>;
    senderId: Scalars['String'];
    recipientId: Scalars['String'];
    createdDate: Scalars['String'];
};
export declare type Message = {
    __typename?: 'Message';
    content: Scalars['String'];
    senderId: Scalars['String'];
    recipientId: Scalars['String'];
    createdAt: Scalars['String'];
};
export declare type NotificationMessage = {
    __typename?: 'NotificationMessage';
    Title?: Maybe<Scalars['String']>;
    Body?: Maybe<Scalars['String']>;
};
export declare type Subscription = {
    __typename?: 'Subscription';
    newMessage: Message;
    newNotification: Notification;
};
export declare type SubscriptionNewMessageArgs = {
    recipientId: Scalars['String'];
};
export declare type SubscriptionNewNotificationArgs = {
    recipientId: Scalars['String'];
};
export declare type MessageInput = {
    content: Scalars['String'];
    recipientId: Scalars['String'];
};
export declare type S3Payload = {
    __typename?: 'S3Payload';
    signedRequest: Scalars['String'];
    url: Scalars['String'];
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
export declare type Schedulebool = {
    monday?: Maybe<Scalars['Boolean']>;
    tuesday?: Maybe<Scalars['Boolean']>;
    wednesday?: Maybe<Scalars['Boolean']>;
    thusday?: Maybe<Scalars['Boolean']>;
    friday?: Maybe<Scalars['Boolean']>;
    saturday?: Maybe<Scalars['Boolean']>;
    sunday?: Maybe<Scalars['Boolean']>;
};
export declare type ScheduleTime = {
    mondaySchedule?: Maybe<StartEnd>;
    tuesdaySchedule?: Maybe<StartEnd>;
    wednesdaySchedule?: Maybe<StartEnd>;
    thursdaySchedule?: Maybe<StartEnd>;
    fridaySchedule?: Maybe<StartEnd>;
    saturdaySchedule?: Maybe<StartEnd>;
    sundaySchedule?: Maybe<StartEnd>;
};
export declare type UpdateServices = {
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
export declare type ServiceUser = {
    __typename?: 'ServiceUser';
    user: Array<User>;
    service: Array<Service>;
};
export declare type Calendar = {
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
export declare type StartEnd = {
    StartTime?: Maybe<Scalars['Int']>;
    EndTime?: Maybe<Scalars['Int']>;
};
export declare type Time = {
    __typename?: 'Time';
    StartTime?: Maybe<Scalars['Int']>;
    EndTime?: Maybe<Scalars['Int']>;
};
export declare type Input = {
    BookingRequest: Scalars['Boolean'];
    recipientId: Scalars['String'];
    message?: Maybe<MessageNotif>;
};
export declare type MessageNotif = {
    Title?: Maybe<Scalars['String']>;
    Body?: Maybe<Scalars['String']>;
};
export declare type BookingResponse = {
    __typename?: 'BookingResponse';
    errors?: Maybe<Error>;
    booking?: Maybe<Booking>;
};
export declare type Booking = {
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
export declare enum CacheControlScope {
    Public = "PUBLIC",
    Private = "PRIVATE"
}
export declare type ChangePasswordMutationVariables = {
    token: Scalars['Int'];
    password: Scalars['String'];
};
export declare type ChangePasswordMutation = ({
    __typename?: 'Mutation';
} & {
    changePassword?: Maybe<({
        __typename?: 'User';
    } & Pick<User, 'id' | 'email' | 'username' | 'sessionId'>)>;
});
export declare type CreateMessageMutationVariables = {
    content: Scalars['String'];
    recipientId: Scalars['String'];
};
export declare type CreateMessageMutation = ({
    __typename?: 'Mutation';
} & Pick<Mutation, 'createMessage'>);
export declare type FindServiceCalendarQueryVariables = {
    ServiceId: Scalars['String'];
};
export declare type FindServiceCalendarQuery = ({
    __typename?: 'Query';
} & {
    findServiceCalendar?: Maybe<({
        __typename?: 'Calendar';
    } & Pick<Calendar, 'CalendarId' | 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday'> & {
        mondaySchedule?: Maybe<({
            __typename?: 'Time';
        } & Pick<Time, 'StartTime' | 'EndTime'>)>;
        tuesdaySchedule?: Maybe<({
            __typename?: 'Time';
        } & Pick<Time, 'StartTime' | 'EndTime'>)>;
        wednesdaySchedule?: Maybe<({
            __typename?: 'Time';
        } & Pick<Time, 'StartTime' | 'EndTime'>)>;
        thursdaySchedule?: Maybe<({
            __typename?: 'Time';
        } & Pick<Time, 'StartTime' | 'EndTime'>)>;
        fridaySchedule?: Maybe<({
            __typename?: 'Time';
        } & Pick<Time, 'StartTime' | 'EndTime'>)>;
        saturdaySchedule?: Maybe<({
            __typename?: 'Time';
        } & Pick<Time, 'StartTime' | 'EndTime'>)>;
        sundaySchedule?: Maybe<({
            __typename?: 'Time';
        } & Pick<Time, 'StartTime' | 'EndTime'>)>;
    })>;
});
export declare type FindUrlMutationVariables = {
    serviceId: Scalars['String'];
};
export declare type FindUrlMutation = ({
    __typename?: 'Mutation';
} & Pick<Mutation, 'findUrl'>);
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
    } & Pick<LoginResponse, 'sessionId'> & {
        errors?: Maybe<Array<({
            __typename?: 'Error';
        } & Pick<Error, 'path' | 'message'>)>>;
    });
});
export declare type LogoutMutationVariables = {};
export declare type LogoutMutation = ({
    __typename?: 'Mutation';
} & Pick<Mutation, 'logout'>);
export declare type MeQueryVariables = {};
export declare type MeQuery = ({
    __typename?: 'Query';
} & {
    me?: Maybe<({
        __typename?: 'Me';
    } & Pick<Me, 'sessionId'> & {
        user?: Maybe<({
            __typename?: 'User';
        } & Pick<User, 'id' | 'email' | 'username'> & {
            service?: Maybe<({
                __typename?: 'Service';
            } & Pick<Service, 'id' | 'name' | 'pictureUrl' | 'description' | 'coutryId' | 'stateId' | 'cityId' | 'Taxes' | 'Adress' | 'rating' | 'price' | 'ownerId'>)>;
            notification?: Maybe<Array<({
                __typename?: 'Notification';
            } & Pick<Notification, 'senderId' | 'recipientId'> & {
                message?: Maybe<({
                    __typename?: 'NotificationMessage';
                } & Pick<NotificationMessage, 'Title' | 'Body'>)>;
            })>>;
            messages?: Maybe<Array<({
                __typename?: 'Message';
            } & Pick<Message, 'content' | 'senderId' | 'recipientId' | 'createdAt'>)>>;
        })>;
        service?: Maybe<Array<Maybe<({
            __typename?: 'service';
        } & Pick<Service, 'id' | 'name' | 'pictureUrl' | 'description' | 'coutryId' | 'stateId' | 'cityId' | 'Taxes' | 'Adress' | 'rating' | 'price' | 'ownerId'>)>>>;
    })>;
});
export declare type MessageQueryVariables = {};
export declare type MessageQuery = ({
    __typename?: 'Query';
} & {
    messages: Array<({
        __typename?: 'Message';
    } & Pick<Message, 'content' | 'senderId' | 'recipientId' | 'createdAt'>)>;
});
export declare type NotificationQueryVariables = {};
export declare type NotificationQuery = ({
    __typename?: 'Query';
} & {
    notification: Array<({
        __typename?: 'Notification';
    } & Pick<Notification, 'senderId' | 'recipientId' | 'createdDate'> & {
        message?: Maybe<({
            __typename?: 'NotificationMessage';
        } & Pick<NotificationMessage, 'Title' | 'Body'>)>;
    })>;
});
export declare type QueryBookingQueryVariables = {
    serviceId: Scalars['String'];
    date: Scalars['String'];
};
export declare type QueryBookingQuery = ({
    __typename?: 'Query';
} & {
    QueryBooking?: Maybe<Array<({
        __typename?: 'Booking';
    } & Pick<Booking, 'startService' | 'endService' | 'price' | 'taxes' | 'depositAmount' | 'isRefund' | 'transactionFee' | 'Total'>)>>;
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
    register: ({
        __typename?: 'RegisterResponse';
    } & Pick<RegisterResponse, 'sessionId'> & {
        errors?: Maybe<Array<({
            __typename?: 'Error';
        } & Pick<Error, 'path' | 'message'>)>>;
    });
});
export declare type SearchServicesUserQueryVariables = {
    search: Scalars['String'];
    offset?: Maybe<Scalars['Int']>;
    limit: Scalars['Int'];
};
export declare type SearchServicesUserQuery = ({
    __typename?: 'Query';
} & {
    searchServicesUser?: Maybe<({
        __typename?: 'ServiceUser';
    } & {
        user: Array<({
            __typename?: 'User';
        } & Pick<User, 'username' | 'email'> & {
            service?: Maybe<({
                __typename?: 'Service';
            } & Pick<Service, 'id' | 'name' | 'description' | 'coutryId' | 'stateId' | 'cityId' | 'Taxes' | 'Adress' | 'rating' | 'price' | 'ownerId'>)>;
        })>;
        service: Array<({
            __typename?: 'Service';
        } & Pick<Service, 'id' | 'name' | 'description' | 'coutryId' | 'stateId' | 'cityId' | 'Taxes' | 'Adress' | 'rating' | 'price' | 'ownerId'>)>;
    })>;
});
export declare type ServiceByCategoryQueryVariables = {
    category: Scalars['String'];
};
export declare type ServiceByCategoryQuery = ({
    __typename?: 'Query';
} & {
    ServiceByCategory?: Maybe<Array<Maybe<({
        __typename?: 'Service';
    } & Pick<Service, 'id' | 'name' | 'description' | 'coutryId' | 'stateId' | 'cityId' | 'Taxes' | 'Adress' | 'rating' | 'price' | 'ownerId'>)>>>;
});
export declare type ServicesUserQueryVariables = {
    ServiceId: Scalars['String'];
};
export declare type ServicesUserQuery = ({
    __typename?: 'Query';
} & {
    ServiceUser?: Maybe<({
        __typename?: 'User';
    } & Pick<User, 'id' | 'username' | 'email'> & {
        service?: Maybe<({
            __typename?: 'Service';
        } & Pick<Service, 'id' | 'name' | 'description' | 'coutryId' | 'stateId' | 'cityId' | 'Taxes' | 'Adress' | 'rating' | 'price' | 'ownerId'>)>;
    })>;
});
export declare type SignS3MutationVariables = {
    filename: Scalars['String'];
    filetype: Scalars['String'];
    id: Scalars['String'];
};
export declare type SignS3Mutation = ({
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
export declare const CreateMessageDocument: import("graphql").DocumentNode;
export declare type CreateMessageMutationFn = ApolloReactCommon.MutationFunction<CreateMessageMutation, CreateMessageMutationVariables>;
export declare function useCreateMessageMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateMessageMutation, CreateMessageMutationVariables>): ApolloReactHooks.MutationTuple<CreateMessageMutation, CreateMessageMutationVariables>;
export declare type CreateMessageMutationHookResult = ReturnType<typeof useCreateMessageMutation>;
export declare type CreateMessageMutationResult = ApolloReactCommon.MutationResult<CreateMessageMutation>;
export declare type CreateMessageMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateMessageMutation, CreateMessageMutationVariables>;
export declare const FindServiceCalendarDocument: import("graphql").DocumentNode;
export declare function useFindServiceCalendarQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindServiceCalendarQuery, FindServiceCalendarQueryVariables>): ApolloReactCommon.QueryResult<FindServiceCalendarQuery, FindServiceCalendarQueryVariables>;
export declare function useFindServiceCalendarLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindServiceCalendarQuery, FindServiceCalendarQueryVariables>): ApolloReactHooks.QueryTuple<FindServiceCalendarQuery, FindServiceCalendarQueryVariables>;
export declare type FindServiceCalendarQueryHookResult = ReturnType<typeof useFindServiceCalendarQuery>;
export declare type FindServiceCalendarLazyQueryHookResult = ReturnType<typeof useFindServiceCalendarLazyQuery>;
export declare type FindServiceCalendarQueryResult = ApolloReactCommon.QueryResult<FindServiceCalendarQuery, FindServiceCalendarQueryVariables>;
export declare const FindUrlDocument: import("graphql").DocumentNode;
export declare type FindUrlMutationFn = ApolloReactCommon.MutationFunction<FindUrlMutation, FindUrlMutationVariables>;
export declare function useFindUrlMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<FindUrlMutation, FindUrlMutationVariables>): ApolloReactHooks.MutationTuple<FindUrlMutation, FindUrlMutationVariables>;
export declare type FindUrlMutationHookResult = ReturnType<typeof useFindUrlMutation>;
export declare type FindUrlMutationResult = ApolloReactCommon.MutationResult<FindUrlMutation>;
export declare type FindUrlMutationOptions = ApolloReactCommon.BaseMutationOptions<FindUrlMutation, FindUrlMutationVariables>;
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
export declare const LogoutDocument: import("graphql").DocumentNode;
export declare type LogoutMutationFn = ApolloReactCommon.MutationFunction<LogoutMutation, LogoutMutationVariables>;
export declare function useLogoutMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LogoutMutation, LogoutMutationVariables>): ApolloReactHooks.MutationTuple<LogoutMutation, LogoutMutationVariables>;
export declare type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export declare type LogoutMutationResult = ApolloReactCommon.MutationResult<LogoutMutation>;
export declare type LogoutMutationOptions = ApolloReactCommon.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export declare const MeDocument: import("graphql").DocumentNode;
export declare function useMeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MeQuery, MeQueryVariables>): ApolloReactCommon.QueryResult<MeQuery, MeQueryVariables>;
export declare function useMeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MeQuery, MeQueryVariables>): ApolloReactHooks.QueryTuple<MeQuery, MeQueryVariables>;
export declare type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export declare type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export declare type MeQueryResult = ApolloReactCommon.QueryResult<MeQuery, MeQueryVariables>;
export declare const MessageDocument: import("graphql").DocumentNode;
export declare function useMessageQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MessageQuery, MessageQueryVariables>): ApolloReactCommon.QueryResult<MessageQuery, MessageQueryVariables>;
export declare function useMessageLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MessageQuery, MessageQueryVariables>): ApolloReactHooks.QueryTuple<MessageQuery, MessageQueryVariables>;
export declare type MessageQueryHookResult = ReturnType<typeof useMessageQuery>;
export declare type MessageLazyQueryHookResult = ReturnType<typeof useMessageLazyQuery>;
export declare type MessageQueryResult = ApolloReactCommon.QueryResult<MessageQuery, MessageQueryVariables>;
export declare const NotificationDocument: import("graphql").DocumentNode;
export declare function useNotificationQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<NotificationQuery, NotificationQueryVariables>): ApolloReactCommon.QueryResult<NotificationQuery, NotificationQueryVariables>;
export declare function useNotificationLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<NotificationQuery, NotificationQueryVariables>): ApolloReactHooks.QueryTuple<NotificationQuery, NotificationQueryVariables>;
export declare type NotificationQueryHookResult = ReturnType<typeof useNotificationQuery>;
export declare type NotificationLazyQueryHookResult = ReturnType<typeof useNotificationLazyQuery>;
export declare type NotificationQueryResult = ApolloReactCommon.QueryResult<NotificationQuery, NotificationQueryVariables>;
export declare const QueryBookingDocument: import("graphql").DocumentNode;
export declare function useQueryBookingQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<QueryBookingQuery, QueryBookingQueryVariables>): ApolloReactCommon.QueryResult<QueryBookingQuery, QueryBookingQueryVariables>;
export declare function useQueryBookingLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<QueryBookingQuery, QueryBookingQueryVariables>): ApolloReactHooks.QueryTuple<QueryBookingQuery, QueryBookingQueryVariables>;
export declare type QueryBookingQueryHookResult = ReturnType<typeof useQueryBookingQuery>;
export declare type QueryBookingLazyQueryHookResult = ReturnType<typeof useQueryBookingLazyQuery>;
export declare type QueryBookingQueryResult = ApolloReactCommon.QueryResult<QueryBookingQuery, QueryBookingQueryVariables>;
export declare const RegisterDocument: import("graphql").DocumentNode;
export declare type RegisterMutationFn = ApolloReactCommon.MutationFunction<RegisterMutation, RegisterMutationVariables>;
export declare function useRegisterMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RegisterMutation, RegisterMutationVariables>): ApolloReactHooks.MutationTuple<RegisterMutation, RegisterMutationVariables>;
export declare type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export declare type RegisterMutationResult = ApolloReactCommon.MutationResult<RegisterMutation>;
export declare type RegisterMutationOptions = ApolloReactCommon.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export declare const SearchServicesUserDocument: import("graphql").DocumentNode;
export declare function useSearchServicesUserQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SearchServicesUserQuery, SearchServicesUserQueryVariables>): ApolloReactCommon.QueryResult<SearchServicesUserQuery, SearchServicesUserQueryVariables>;
export declare function useSearchServicesUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SearchServicesUserQuery, SearchServicesUserQueryVariables>): ApolloReactHooks.QueryTuple<SearchServicesUserQuery, SearchServicesUserQueryVariables>;
export declare type SearchServicesUserQueryHookResult = ReturnType<typeof useSearchServicesUserQuery>;
export declare type SearchServicesUserLazyQueryHookResult = ReturnType<typeof useSearchServicesUserLazyQuery>;
export declare type SearchServicesUserQueryResult = ApolloReactCommon.QueryResult<SearchServicesUserQuery, SearchServicesUserQueryVariables>;
export declare const ServiceByCategoryDocument: import("graphql").DocumentNode;
export declare function useServiceByCategoryQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ServiceByCategoryQuery, ServiceByCategoryQueryVariables>): ApolloReactCommon.QueryResult<ServiceByCategoryQuery, ServiceByCategoryQueryVariables>;
export declare function useServiceByCategoryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ServiceByCategoryQuery, ServiceByCategoryQueryVariables>): ApolloReactHooks.QueryTuple<ServiceByCategoryQuery, ServiceByCategoryQueryVariables>;
export declare type ServiceByCategoryQueryHookResult = ReturnType<typeof useServiceByCategoryQuery>;
export declare type ServiceByCategoryLazyQueryHookResult = ReturnType<typeof useServiceByCategoryLazyQuery>;
export declare type ServiceByCategoryQueryResult = ApolloReactCommon.QueryResult<ServiceByCategoryQuery, ServiceByCategoryQueryVariables>;
export declare const ServicesUserDocument: import("graphql").DocumentNode;
export declare function useServicesUserQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ServicesUserQuery, ServicesUserQueryVariables>): ApolloReactCommon.QueryResult<ServicesUserQuery, ServicesUserQueryVariables>;
export declare function useServicesUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ServicesUserQuery, ServicesUserQueryVariables>): ApolloReactHooks.QueryTuple<ServicesUserQuery, ServicesUserQueryVariables>;
export declare type ServicesUserQueryHookResult = ReturnType<typeof useServicesUserQuery>;
export declare type ServicesUserLazyQueryHookResult = ReturnType<typeof useServicesUserLazyQuery>;
export declare type ServicesUserQueryResult = ApolloReactCommon.QueryResult<ServicesUserQuery, ServicesUserQueryVariables>;
export declare const SignS3Document: import("graphql").DocumentNode;
export declare type SignS3MutationFn = ApolloReactCommon.MutationFunction<SignS3Mutation, SignS3MutationVariables>;
export declare function useSignS3Mutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SignS3Mutation, SignS3MutationVariables>): ApolloReactHooks.MutationTuple<SignS3Mutation, SignS3MutationVariables>;
export declare type SignS3MutationHookResult = ReturnType<typeof useSignS3Mutation>;
export declare type SignS3MutationResult = ApolloReactCommon.MutationResult<SignS3Mutation>;
export declare type SignS3MutationOptions = ApolloReactCommon.BaseMutationOptions<SignS3Mutation, SignS3MutationVariables>;
