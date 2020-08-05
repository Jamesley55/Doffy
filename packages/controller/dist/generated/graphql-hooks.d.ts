import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export declare type Maybe<T> = T | null;
export declare type Exact<T extends {
    [key: string]: any;
}> = {
    [K in keyof T]: T[K];
};
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
    userType?: Maybe<Scalars['String']>;
    sessionId: Scalars['String'];
};
export declare type RegisterResponse = {
    __typename?: 'RegisterResponse';
    errors?: Maybe<Array<Error>>;
    sessionId?: Maybe<Scalars['String']>;
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
    QueryBookingTime?: Maybe<Array<Scalars['String']>>;
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
export declare type QueryQueryBookingTimeArgs = {
    serviceId: Scalars['String'];
    date: Scalars['String'];
};
export declare type Service = {
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
export declare type Notification = {
    __typename?: 'Notification';
    message?: Maybe<NotificationMessage>;
    senderId: Scalars['String'];
    recipientId: Scalars['String'];
    createdDate: Scalars['String'];
    bookRequest?: Maybe<Scalars['Boolean']>;
    id?: Maybe<Scalars['String']>;
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
    StartTime?: Maybe<Scalars['Float']>;
    EndTime?: Maybe<Scalars['Float']>;
};
export declare type Time = {
    __typename?: 'Time';
    StartTime?: Maybe<Scalars['String']>;
    EndTime?: Maybe<Scalars['String']>;
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
export declare type ChangePasswordMutationVariables = Exact<{
    token: Scalars['Int'];
    password: Scalars['String'];
}>;
export declare type ChangePasswordMutation = ({
    __typename?: 'Mutation';
} & {
    changePassword?: Maybe<({
        __typename?: 'User';
    } & Pick<User, 'id' | 'email' | 'username' | 'sessionId'>)>;
});
export declare type CreateBookingMutationVariables = Exact<{
    serviceId: Scalars['String'];
    date: Scalars['String'];
    startService: Scalars['Float'];
}>;
export declare type CreateBookingMutation = ({
    __typename?: 'Mutation';
} & {
    createBooking?: Maybe<({
        __typename?: 'BookingResponse';
    } & {
        errors?: Maybe<({
            __typename?: 'Error';
        } & Pick<Error, 'path' | 'message'>)>;
        booking?: Maybe<({
            __typename?: 'Booking';
        } & Pick<Booking, 'startService' | 'endService' | 'price' | 'taxes' | 'depositAmount' | 'isRefund' | 'transactionFee' | 'Total'>)>;
    })>;
});
export declare type CreateMessageMutationVariables = Exact<{
    content: Scalars['String'];
    recipientId: Scalars['String'];
}>;
export declare type CreateMessageMutation = ({
    __typename?: 'Mutation';
} & Pick<Mutation, 'createMessage'>);
export declare type CreateNotificationMutationVariables = Exact<{
    input?: Maybe<Input>;
}>;
export declare type CreateNotificationMutation = ({
    __typename?: 'Mutation';
} & Pick<Mutation, 'createNotification'>);
export declare type CreateServiceMutationVariables = Exact<{
    inputService?: Maybe<CreateServices>;
    ScheduleBool?: Maybe<Schedulebool>;
    ScheduleTime?: Maybe<ScheduleTime>;
}>;
export declare type CreateServiceMutation = ({
    __typename?: 'Mutation';
} & Pick<Mutation, 'createService'>);
export declare type DeleteServiceMutationVariables = Exact<{
    ServiceId: Scalars['String'];
}>;
export declare type DeleteServiceMutation = ({
    __typename?: 'Mutation';
} & Pick<Mutation, 'DeleteService'>);
export declare type FindServiceCalendarQueryVariables = Exact<{
    ServiceId: Scalars['String'];
}>;
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
export declare type FindUrlMutationVariables = Exact<{
    serviceId: Scalars['String'];
}>;
export declare type FindUrlMutation = ({
    __typename?: 'Mutation';
} & Pick<Mutation, 'findUrl'>);
export declare type ForgotPasswordMutationVariables = Exact<{
    email: Scalars['String'];
}>;
export declare type ForgotPasswordMutation = ({
    __typename?: 'Mutation';
} & Pick<Mutation, 'forgotPassword'>);
export declare type LoginMutationVariables = Exact<{
    email: Scalars['String'];
    password: Scalars['String'];
}>;
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
export declare type LogoutMutationVariables = Exact<{
    [key: string]: never;
}>;
export declare type LogoutMutation = ({
    __typename?: 'Mutation';
} & Pick<Mutation, 'logout'>);
export declare type MeQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type MeQuery = ({
    __typename?: 'Query';
} & {
    me?: Maybe<({
        __typename?: 'Me';
    } & Pick<Me, 'sessionId'> & {
        user?: Maybe<({
            __typename?: 'User';
        } & Pick<User, 'id' | 'email' | 'username' | 'userType'> & {
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
            __typename?: 'Service';
        } & Pick<Service, 'id' | 'name' | 'pictureUrl' | 'description' | 'coutryId' | 'stateId' | 'cityId' | 'Taxes' | 'Adress' | 'rating' | 'price' | 'ownerId'>)>>>;
    })>;
});
export declare type MessageQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type MessageQuery = ({
    __typename?: 'Query';
} & {
    messages: Array<({
        __typename?: 'Message';
    } & Pick<Message, 'content' | 'senderId' | 'recipientId' | 'createdAt'>)>;
});
export declare type NotificationQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type NotificationQuery = ({
    __typename?: 'Query';
} & {
    notification: Array<({
        __typename?: 'Notification';
    } & Pick<Notification, 'id' | 'bookRequest' | 'createdDate' | 'recipientId' | 'senderId'> & {
        message?: Maybe<({
            __typename?: 'NotificationMessage';
        } & Pick<NotificationMessage, 'Title' | 'Body'>)>;
    })>;
});
export declare type NewNotificationSubscriptionVariables = Exact<{
    recipientId: Scalars['String'];
}>;
export declare type NewNotificationSubscription = ({
    __typename?: 'Subscription';
} & {
    newNotification: ({
        __typename?: 'Notification';
    } & Pick<Notification, 'id' | 'bookRequest' | 'createdDate' | 'recipientId' | 'senderId'> & {
        message?: Maybe<({
            __typename?: 'NotificationMessage';
        } & Pick<NotificationMessage, 'Title' | 'Body'>)>;
    });
});
export declare type QueryBookingQueryVariables = Exact<{
    serviceId: Scalars['String'];
    date: Scalars['String'];
}>;
export declare type QueryBookingQuery = ({
    __typename?: 'Query';
} & {
    QueryBooking?: Maybe<Array<({
        __typename?: 'Booking';
    } & Pick<Booking, 'startService' | 'endService' | 'price' | 'taxes' | 'depositAmount' | 'isRefund' | 'transactionFee' | 'Total'>)>>;
});
export declare type QueryBookingTimeQueryVariables = Exact<{
    serviceId: Scalars['String'];
    date: Scalars['String'];
}>;
export declare type QueryBookingTimeQuery = ({
    __typename?: 'Query';
} & Pick<Query, 'QueryBookingTime'>);
export declare type RegisterMutationVariables = Exact<{
    username: Scalars['String'];
    email: Scalars['String'];
    password: Scalars['String'];
    confirmPassword: Scalars['String'];
}>;
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
export declare type SearchServicesUserQueryVariables = Exact<{
    search: Scalars['String'];
    offset?: Maybe<Scalars['Int']>;
    limit: Scalars['Int'];
}>;
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
export declare type ServiceByCategoryQueryVariables = Exact<{
    category: Scalars['String'];
}>;
export declare type ServiceByCategoryQuery = ({
    __typename?: 'Query';
} & {
    ServiceByCategory?: Maybe<Array<Maybe<({
        __typename?: 'Service';
    } & Pick<Service, 'id' | 'name' | 'category' | 'description' | 'coutryId' | 'stateId' | 'cityId' | 'Taxes' | 'Adress' | 'rating' | 'price' | 'payoutSchedule' | 'customerBillingStatement' | 'latitude' | 'longitude' | 'ownerId' | 'profilPicture' | 'picturesUrl' | 'adresseVisible' | 'averageTime'>)>>>;
});
export declare type ServicesUserQueryVariables = Exact<{
    ServiceId: Scalars['String'];
}>;
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
export declare type SignS3MutationVariables = Exact<{
    filename: Scalars['String'];
    filetype: Scalars['String'];
}>;
export declare type SignS3Mutation = ({
    __typename?: 'Mutation';
} & {
    signS3: ({
        __typename?: 'S3Payload';
    } & Pick<S3Payload, 'url' | 'signedRequest'>);
});
export declare type UpdateBookingMutationVariables = Exact<{
    NotificationId: Scalars['String'];
    response?: Maybe<Scalars['Boolean']>;
}>;
export declare type UpdateBookingMutation = ({
    __typename?: 'Mutation';
} & Pick<Mutation, 'updateBooking'>);
export declare type UpdateServiceMutationVariables = Exact<{
    serviceId: Scalars['String'];
    inputService?: Maybe<UpdateServices>;
    ScheduleBool?: Maybe<Schedulebool>;
    ScheduleTime?: Maybe<ScheduleTime>;
}>;
export declare type UpdateServiceMutation = ({
    __typename?: 'Mutation';
} & Pick<Mutation, 'updateService'>);
export declare const ChangePasswordDocument: import("graphql").DocumentNode;
export declare type ChangePasswordMutationFn = ApolloReactCommon.MutationFunction<ChangePasswordMutation, ChangePasswordMutationVariables>;
export declare function useChangePasswordMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ChangePasswordMutation, ChangePasswordMutationVariables>): ApolloReactHooks.MutationTuple<ChangePasswordMutation, Exact<{
    token: number;
    password: string;
}>>;
export declare type ChangePasswordMutationHookResult = ReturnType<typeof useChangePasswordMutation>;
export declare type ChangePasswordMutationResult = ApolloReactCommon.MutationResult<ChangePasswordMutation>;
export declare type ChangePasswordMutationOptions = ApolloReactCommon.BaseMutationOptions<ChangePasswordMutation, ChangePasswordMutationVariables>;
export declare const CreateBookingDocument: import("graphql").DocumentNode;
export declare type CreateBookingMutationFn = ApolloReactCommon.MutationFunction<CreateBookingMutation, CreateBookingMutationVariables>;
export declare function useCreateBookingMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateBookingMutation, CreateBookingMutationVariables>): ApolloReactHooks.MutationTuple<CreateBookingMutation, Exact<{
    serviceId: string;
    date: string;
    startService: number;
}>>;
export declare type CreateBookingMutationHookResult = ReturnType<typeof useCreateBookingMutation>;
export declare type CreateBookingMutationResult = ApolloReactCommon.MutationResult<CreateBookingMutation>;
export declare type CreateBookingMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateBookingMutation, CreateBookingMutationVariables>;
export declare const CreateMessageDocument: import("graphql").DocumentNode;
export declare type CreateMessageMutationFn = ApolloReactCommon.MutationFunction<CreateMessageMutation, CreateMessageMutationVariables>;
export declare function useCreateMessageMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateMessageMutation, CreateMessageMutationVariables>): ApolloReactHooks.MutationTuple<CreateMessageMutation, Exact<{
    content: string;
    recipientId: string;
}>>;
export declare type CreateMessageMutationHookResult = ReturnType<typeof useCreateMessageMutation>;
export declare type CreateMessageMutationResult = ApolloReactCommon.MutationResult<CreateMessageMutation>;
export declare type CreateMessageMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateMessageMutation, CreateMessageMutationVariables>;
export declare const CreateNotificationDocument: import("graphql").DocumentNode;
export declare type CreateNotificationMutationFn = ApolloReactCommon.MutationFunction<CreateNotificationMutation, CreateNotificationMutationVariables>;
export declare function useCreateNotificationMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateNotificationMutation, CreateNotificationMutationVariables>): ApolloReactHooks.MutationTuple<CreateNotificationMutation, Exact<{
    input?: Input | null | undefined;
}>>;
export declare type CreateNotificationMutationHookResult = ReturnType<typeof useCreateNotificationMutation>;
export declare type CreateNotificationMutationResult = ApolloReactCommon.MutationResult<CreateNotificationMutation>;
export declare type CreateNotificationMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateNotificationMutation, CreateNotificationMutationVariables>;
export declare const CreateServiceDocument: import("graphql").DocumentNode;
export declare type CreateServiceMutationFn = ApolloReactCommon.MutationFunction<CreateServiceMutation, CreateServiceMutationVariables>;
export declare function useCreateServiceMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateServiceMutation, CreateServiceMutationVariables>): ApolloReactHooks.MutationTuple<CreateServiceMutation, Exact<{
    inputService?: CreateServices | null | undefined;
    ScheduleBool?: Schedulebool | null | undefined;
    ScheduleTime?: ScheduleTime | null | undefined;
}>>;
export declare type CreateServiceMutationHookResult = ReturnType<typeof useCreateServiceMutation>;
export declare type CreateServiceMutationResult = ApolloReactCommon.MutationResult<CreateServiceMutation>;
export declare type CreateServiceMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateServiceMutation, CreateServiceMutationVariables>;
export declare const DeleteServiceDocument: import("graphql").DocumentNode;
export declare type DeleteServiceMutationFn = ApolloReactCommon.MutationFunction<DeleteServiceMutation, DeleteServiceMutationVariables>;
export declare function useDeleteServiceMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteServiceMutation, DeleteServiceMutationVariables>): ApolloReactHooks.MutationTuple<DeleteServiceMutation, Exact<{
    ServiceId: string;
}>>;
export declare type DeleteServiceMutationHookResult = ReturnType<typeof useDeleteServiceMutation>;
export declare type DeleteServiceMutationResult = ApolloReactCommon.MutationResult<DeleteServiceMutation>;
export declare type DeleteServiceMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteServiceMutation, DeleteServiceMutationVariables>;
export declare const FindServiceCalendarDocument: import("graphql").DocumentNode;
export declare function useFindServiceCalendarQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindServiceCalendarQuery, FindServiceCalendarQueryVariables>): ApolloReactCommon.QueryResult<FindServiceCalendarQuery, Exact<{
    ServiceId: string;
}>>;
export declare function useFindServiceCalendarLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindServiceCalendarQuery, FindServiceCalendarQueryVariables>): ApolloReactHooks.QueryTuple<FindServiceCalendarQuery, Exact<{
    ServiceId: string;
}>>;
export declare type FindServiceCalendarQueryHookResult = ReturnType<typeof useFindServiceCalendarQuery>;
export declare type FindServiceCalendarLazyQueryHookResult = ReturnType<typeof useFindServiceCalendarLazyQuery>;
export declare type FindServiceCalendarQueryResult = ApolloReactCommon.QueryResult<FindServiceCalendarQuery, FindServiceCalendarQueryVariables>;
export declare const FindUrlDocument: import("graphql").DocumentNode;
export declare type FindUrlMutationFn = ApolloReactCommon.MutationFunction<FindUrlMutation, FindUrlMutationVariables>;
export declare function useFindUrlMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<FindUrlMutation, FindUrlMutationVariables>): ApolloReactHooks.MutationTuple<FindUrlMutation, Exact<{
    serviceId: string;
}>>;
export declare type FindUrlMutationHookResult = ReturnType<typeof useFindUrlMutation>;
export declare type FindUrlMutationResult = ApolloReactCommon.MutationResult<FindUrlMutation>;
export declare type FindUrlMutationOptions = ApolloReactCommon.BaseMutationOptions<FindUrlMutation, FindUrlMutationVariables>;
export declare const ForgotPasswordDocument: import("graphql").DocumentNode;
export declare type ForgotPasswordMutationFn = ApolloReactCommon.MutationFunction<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
export declare function useForgotPasswordMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>): ApolloReactHooks.MutationTuple<ForgotPasswordMutation, Exact<{
    email: string;
}>>;
export declare type ForgotPasswordMutationHookResult = ReturnType<typeof useForgotPasswordMutation>;
export declare type ForgotPasswordMutationResult = ApolloReactCommon.MutationResult<ForgotPasswordMutation>;
export declare type ForgotPasswordMutationOptions = ApolloReactCommon.BaseMutationOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
export declare const LoginDocument: import("graphql").DocumentNode;
export declare type LoginMutationFn = ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>;
export declare function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>): ApolloReactHooks.MutationTuple<LoginMutation, Exact<{
    email: string;
    password: string;
}>>;
export declare type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export declare type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export declare type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export declare const LogoutDocument: import("graphql").DocumentNode;
export declare type LogoutMutationFn = ApolloReactCommon.MutationFunction<LogoutMutation, LogoutMutationVariables>;
export declare function useLogoutMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LogoutMutation, LogoutMutationVariables>): ApolloReactHooks.MutationTuple<LogoutMutation, Exact<{
    [key: string]: never;
}>>;
export declare type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export declare type LogoutMutationResult = ApolloReactCommon.MutationResult<LogoutMutation>;
export declare type LogoutMutationOptions = ApolloReactCommon.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export declare const MeDocument: import("graphql").DocumentNode;
export declare function useMeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MeQuery, MeQueryVariables>): ApolloReactCommon.QueryResult<MeQuery, Exact<{
    [key: string]: never;
}>>;
export declare function useMeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MeQuery, MeQueryVariables>): ApolloReactHooks.QueryTuple<MeQuery, Exact<{
    [key: string]: never;
}>>;
export declare type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export declare type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export declare type MeQueryResult = ApolloReactCommon.QueryResult<MeQuery, MeQueryVariables>;
export declare const MessageDocument: import("graphql").DocumentNode;
export declare function useMessageQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MessageQuery, MessageQueryVariables>): ApolloReactCommon.QueryResult<MessageQuery, Exact<{
    [key: string]: never;
}>>;
export declare function useMessageLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MessageQuery, MessageQueryVariables>): ApolloReactHooks.QueryTuple<MessageQuery, Exact<{
    [key: string]: never;
}>>;
export declare type MessageQueryHookResult = ReturnType<typeof useMessageQuery>;
export declare type MessageLazyQueryHookResult = ReturnType<typeof useMessageLazyQuery>;
export declare type MessageQueryResult = ApolloReactCommon.QueryResult<MessageQuery, MessageQueryVariables>;
export declare const NotificationDocument: import("graphql").DocumentNode;
export declare function useNotificationQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<NotificationQuery, NotificationQueryVariables>): ApolloReactCommon.QueryResult<NotificationQuery, Exact<{
    [key: string]: never;
}>>;
export declare function useNotificationLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<NotificationQuery, NotificationQueryVariables>): ApolloReactHooks.QueryTuple<NotificationQuery, Exact<{
    [key: string]: never;
}>>;
export declare type NotificationQueryHookResult = ReturnType<typeof useNotificationQuery>;
export declare type NotificationLazyQueryHookResult = ReturnType<typeof useNotificationLazyQuery>;
export declare type NotificationQueryResult = ApolloReactCommon.QueryResult<NotificationQuery, NotificationQueryVariables>;
export declare const NewNotificationDocument: import("graphql").DocumentNode;
export declare function useNewNotificationSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<NewNotificationSubscription, NewNotificationSubscriptionVariables>): {
    variables: Exact<{
        recipientId: string;
    }> | undefined;
    loading: boolean;
    data?: NewNotificationSubscription | undefined;
    error?: import("apollo-client").ApolloError | undefined;
};
export declare type NewNotificationSubscriptionHookResult = ReturnType<typeof useNewNotificationSubscription>;
export declare type NewNotificationSubscriptionResult = ApolloReactCommon.SubscriptionResult<NewNotificationSubscription>;
export declare const QueryBookingDocument: import("graphql").DocumentNode;
export declare function useQueryBookingQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<QueryBookingQuery, QueryBookingQueryVariables>): ApolloReactCommon.QueryResult<QueryBookingQuery, Exact<{
    serviceId: string;
    date: string;
}>>;
export declare function useQueryBookingLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<QueryBookingQuery, QueryBookingQueryVariables>): ApolloReactHooks.QueryTuple<QueryBookingQuery, Exact<{
    serviceId: string;
    date: string;
}>>;
export declare type QueryBookingQueryHookResult = ReturnType<typeof useQueryBookingQuery>;
export declare type QueryBookingLazyQueryHookResult = ReturnType<typeof useQueryBookingLazyQuery>;
export declare type QueryBookingQueryResult = ApolloReactCommon.QueryResult<QueryBookingQuery, QueryBookingQueryVariables>;
export declare const QueryBookingTimeDocument: import("graphql").DocumentNode;
export declare function useQueryBookingTimeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<QueryBookingTimeQuery, QueryBookingTimeQueryVariables>): ApolloReactCommon.QueryResult<QueryBookingTimeQuery, Exact<{
    serviceId: string;
    date: string;
}>>;
export declare function useQueryBookingTimeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<QueryBookingTimeQuery, QueryBookingTimeQueryVariables>): ApolloReactHooks.QueryTuple<QueryBookingTimeQuery, Exact<{
    serviceId: string;
    date: string;
}>>;
export declare type QueryBookingTimeQueryHookResult = ReturnType<typeof useQueryBookingTimeQuery>;
export declare type QueryBookingTimeLazyQueryHookResult = ReturnType<typeof useQueryBookingTimeLazyQuery>;
export declare type QueryBookingTimeQueryResult = ApolloReactCommon.QueryResult<QueryBookingTimeQuery, QueryBookingTimeQueryVariables>;
export declare const RegisterDocument: import("graphql").DocumentNode;
export declare type RegisterMutationFn = ApolloReactCommon.MutationFunction<RegisterMutation, RegisterMutationVariables>;
export declare function useRegisterMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RegisterMutation, RegisterMutationVariables>): ApolloReactHooks.MutationTuple<RegisterMutation, Exact<{
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}>>;
export declare type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export declare type RegisterMutationResult = ApolloReactCommon.MutationResult<RegisterMutation>;
export declare type RegisterMutationOptions = ApolloReactCommon.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export declare const SearchServicesUserDocument: import("graphql").DocumentNode;
export declare function useSearchServicesUserQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SearchServicesUserQuery, SearchServicesUserQueryVariables>): ApolloReactCommon.QueryResult<SearchServicesUserQuery, Exact<{
    search: string;
    offset?: number | null | undefined;
    limit: number;
}>>;
export declare function useSearchServicesUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SearchServicesUserQuery, SearchServicesUserQueryVariables>): ApolloReactHooks.QueryTuple<SearchServicesUserQuery, Exact<{
    search: string;
    offset?: number | null | undefined;
    limit: number;
}>>;
export declare type SearchServicesUserQueryHookResult = ReturnType<typeof useSearchServicesUserQuery>;
export declare type SearchServicesUserLazyQueryHookResult = ReturnType<typeof useSearchServicesUserLazyQuery>;
export declare type SearchServicesUserQueryResult = ApolloReactCommon.QueryResult<SearchServicesUserQuery, SearchServicesUserQueryVariables>;
export declare const ServiceByCategoryDocument: import("graphql").DocumentNode;
export declare function useServiceByCategoryQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ServiceByCategoryQuery, ServiceByCategoryQueryVariables>): ApolloReactCommon.QueryResult<ServiceByCategoryQuery, Exact<{
    category: string;
}>>;
export declare function useServiceByCategoryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ServiceByCategoryQuery, ServiceByCategoryQueryVariables>): ApolloReactHooks.QueryTuple<ServiceByCategoryQuery, Exact<{
    category: string;
}>>;
export declare type ServiceByCategoryQueryHookResult = ReturnType<typeof useServiceByCategoryQuery>;
export declare type ServiceByCategoryLazyQueryHookResult = ReturnType<typeof useServiceByCategoryLazyQuery>;
export declare type ServiceByCategoryQueryResult = ApolloReactCommon.QueryResult<ServiceByCategoryQuery, ServiceByCategoryQueryVariables>;
export declare const ServicesUserDocument: import("graphql").DocumentNode;
export declare function useServicesUserQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ServicesUserQuery, ServicesUserQueryVariables>): ApolloReactCommon.QueryResult<ServicesUserQuery, Exact<{
    ServiceId: string;
}>>;
export declare function useServicesUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ServicesUserQuery, ServicesUserQueryVariables>): ApolloReactHooks.QueryTuple<ServicesUserQuery, Exact<{
    ServiceId: string;
}>>;
export declare type ServicesUserQueryHookResult = ReturnType<typeof useServicesUserQuery>;
export declare type ServicesUserLazyQueryHookResult = ReturnType<typeof useServicesUserLazyQuery>;
export declare type ServicesUserQueryResult = ApolloReactCommon.QueryResult<ServicesUserQuery, ServicesUserQueryVariables>;
export declare const SignS3Document: import("graphql").DocumentNode;
export declare type SignS3MutationFn = ApolloReactCommon.MutationFunction<SignS3Mutation, SignS3MutationVariables>;
export declare function useSignS3Mutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SignS3Mutation, SignS3MutationVariables>): ApolloReactHooks.MutationTuple<SignS3Mutation, Exact<{
    filename: string;
    filetype: string;
}>>;
export declare type SignS3MutationHookResult = ReturnType<typeof useSignS3Mutation>;
export declare type SignS3MutationResult = ApolloReactCommon.MutationResult<SignS3Mutation>;
export declare type SignS3MutationOptions = ApolloReactCommon.BaseMutationOptions<SignS3Mutation, SignS3MutationVariables>;
export declare const UpdateBookingDocument: import("graphql").DocumentNode;
export declare type UpdateBookingMutationFn = ApolloReactCommon.MutationFunction<UpdateBookingMutation, UpdateBookingMutationVariables>;
export declare function useUpdateBookingMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateBookingMutation, UpdateBookingMutationVariables>): ApolloReactHooks.MutationTuple<UpdateBookingMutation, Exact<{
    NotificationId: string;
    response?: boolean | null | undefined;
}>>;
export declare type UpdateBookingMutationHookResult = ReturnType<typeof useUpdateBookingMutation>;
export declare type UpdateBookingMutationResult = ApolloReactCommon.MutationResult<UpdateBookingMutation>;
export declare type UpdateBookingMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateBookingMutation, UpdateBookingMutationVariables>;
export declare const UpdateServiceDocument: import("graphql").DocumentNode;
export declare type UpdateServiceMutationFn = ApolloReactCommon.MutationFunction<UpdateServiceMutation, UpdateServiceMutationVariables>;
export declare function useUpdateServiceMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateServiceMutation, UpdateServiceMutationVariables>): ApolloReactHooks.MutationTuple<UpdateServiceMutation, Exact<{
    serviceId: string;
    inputService?: UpdateServices | null | undefined;
    ScheduleBool?: Schedulebool | null | undefined;
    ScheduleTime?: ScheduleTime | null | undefined;
}>>;
export declare type UpdateServiceMutationHookResult = ReturnType<typeof useUpdateServiceMutation>;
export declare type UpdateServiceMutationResult = ApolloReactCommon.MutationResult<UpdateServiceMutation>;
export declare type UpdateServiceMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateServiceMutation, UpdateServiceMutationVariables>;
