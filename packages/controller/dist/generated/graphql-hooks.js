"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useUpdateServiceMutation = exports.UpdateServiceDocument = exports.useUpdateBookingMutation = exports.UpdateBookingDocument = exports.useSignS3Mutation = exports.SignS3Document = exports.useServicesUserLazyQuery = exports.useServicesUserQuery = exports.ServicesUserDocument = exports.useServiceByCategoryLazyQuery = exports.useServiceByCategoryQuery = exports.ServiceByCategoryDocument = exports.useSearchServicesUserLazyQuery = exports.useSearchServicesUserQuery = exports.SearchServicesUserDocument = exports.useRegisterMutation = exports.RegisterDocument = exports.useQueryBookingTimeLazyQuery = exports.useQueryBookingTimeQuery = exports.QueryBookingTimeDocument = exports.useQueryBookingLazyQuery = exports.useQueryBookingQuery = exports.QueryBookingDocument = exports.useNewNotificationSubscription = exports.NewNotificationDocument = exports.useNotificationLazyQuery = exports.useNotificationQuery = exports.NotificationDocument = exports.useMessageLazyQuery = exports.useMessageQuery = exports.MessageDocument = exports.useMeLazyQuery = exports.useMeQuery = exports.MeDocument = exports.useLogoutMutation = exports.LogoutDocument = exports.useLoginMutation = exports.LoginDocument = exports.useForgotPasswordMutation = exports.ForgotPasswordDocument = exports.useFindUrlMutation = exports.FindUrlDocument = exports.useFindServiceCalendarLazyQuery = exports.useFindServiceCalendarQuery = exports.FindServiceCalendarDocument = exports.useDeleteServiceMutation = exports.DeleteServiceDocument = exports.useCreateServiceMutation = exports.CreateServiceDocument = exports.useSetNotificationPushTokenMutation = exports.SetNotificationPushTokenDocument = exports.useCreateNotificationMutation = exports.CreateNotificationDocument = exports.useCreateMessageMutation = exports.CreateMessageDocument = exports.useCreateBookingMutation = exports.CreateBookingDocument = exports.useChangePasswordMutation = exports.ChangePasswordDocument = exports.CacheControlScope = void 0;
const graphql_tag_1 = require("graphql-tag");
const ApolloReactHooks = require("@apollo/react-hooks");
var CacheControlScope;
(function (CacheControlScope) {
    CacheControlScope["Public"] = "PUBLIC";
    CacheControlScope["Private"] = "PRIVATE";
})(CacheControlScope = exports.CacheControlScope || (exports.CacheControlScope = {}));
exports.ChangePasswordDocument = graphql_tag_1.default `
    mutation changePassword($token: Int!, $password: String!) {
  changePassword(token: $token, password: $password) {
    id
    email
    username
    sessionId
  }
}
    `;
function useChangePasswordMutation(baseOptions) {
    return ApolloReactHooks.useMutation(exports.ChangePasswordDocument, baseOptions);
}
exports.useChangePasswordMutation = useChangePasswordMutation;
exports.CreateBookingDocument = graphql_tag_1.default `
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
function useCreateBookingMutation(baseOptions) {
    return ApolloReactHooks.useMutation(exports.CreateBookingDocument, baseOptions);
}
exports.useCreateBookingMutation = useCreateBookingMutation;
exports.CreateMessageDocument = graphql_tag_1.default `
    mutation createMessage($content: String!, $recipientId: String!) {
  createMessage(message: {content: $content, recipientId: $recipientId})
}
    `;
function useCreateMessageMutation(baseOptions) {
    return ApolloReactHooks.useMutation(exports.CreateMessageDocument, baseOptions);
}
exports.useCreateMessageMutation = useCreateMessageMutation;
exports.CreateNotificationDocument = graphql_tag_1.default `
    mutation createNotification($input: input) {
  createNotification(input: $input)
}
    `;
function useCreateNotificationMutation(baseOptions) {
    return ApolloReactHooks.useMutation(exports.CreateNotificationDocument, baseOptions);
}
exports.useCreateNotificationMutation = useCreateNotificationMutation;
exports.SetNotificationPushTokenDocument = graphql_tag_1.default `
    mutation setNotificationPushToken($pushToken: String!) {
  setNotificationPushToken(pushToken: $pushToken)
}
    `;
function useSetNotificationPushTokenMutation(baseOptions) {
    return ApolloReactHooks.useMutation(exports.SetNotificationPushTokenDocument, baseOptions);
}
exports.useSetNotificationPushTokenMutation = useSetNotificationPushTokenMutation;
exports.CreateServiceDocument = graphql_tag_1.default `
    mutation createService($inputService: CreateServices, $ScheduleBool: Schedulebool, $ScheduleTime: ScheduleTime) {
  createService(inputService: $inputService, ScheduleBool: $ScheduleBool, ScheduleTime: $ScheduleTime)
}
    `;
function useCreateServiceMutation(baseOptions) {
    return ApolloReactHooks.useMutation(exports.CreateServiceDocument, baseOptions);
}
exports.useCreateServiceMutation = useCreateServiceMutation;
exports.DeleteServiceDocument = graphql_tag_1.default `
    mutation DeleteService($ServiceId: String!) {
  DeleteService(ServiceId: $ServiceId)
}
    `;
function useDeleteServiceMutation(baseOptions) {
    return ApolloReactHooks.useMutation(exports.DeleteServiceDocument, baseOptions);
}
exports.useDeleteServiceMutation = useDeleteServiceMutation;
exports.FindServiceCalendarDocument = graphql_tag_1.default `
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
function useFindServiceCalendarQuery(baseOptions) {
    return ApolloReactHooks.useQuery(exports.FindServiceCalendarDocument, baseOptions);
}
exports.useFindServiceCalendarQuery = useFindServiceCalendarQuery;
function useFindServiceCalendarLazyQuery(baseOptions) {
    return ApolloReactHooks.useLazyQuery(exports.FindServiceCalendarDocument, baseOptions);
}
exports.useFindServiceCalendarLazyQuery = useFindServiceCalendarLazyQuery;
exports.FindUrlDocument = graphql_tag_1.default `
    mutation findUrl($serviceId: String!) {
  findUrl(serviceId: $serviceId)
}
    `;
function useFindUrlMutation(baseOptions) {
    return ApolloReactHooks.useMutation(exports.FindUrlDocument, baseOptions);
}
exports.useFindUrlMutation = useFindUrlMutation;
exports.ForgotPasswordDocument = graphql_tag_1.default `
    mutation forgotPassword($email: String!) {
  forgotPassword(email: $email)
}
    `;
function useForgotPasswordMutation(baseOptions) {
    return ApolloReactHooks.useMutation(exports.ForgotPasswordDocument, baseOptions);
}
exports.useForgotPasswordMutation = useForgotPasswordMutation;
exports.LoginDocument = graphql_tag_1.default `
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
function useLoginMutation(baseOptions) {
    return ApolloReactHooks.useMutation(exports.LoginDocument, baseOptions);
}
exports.useLoginMutation = useLoginMutation;
exports.LogoutDocument = graphql_tag_1.default `
    mutation logout {
  logout
}
    `;
function useLogoutMutation(baseOptions) {
    return ApolloReactHooks.useMutation(exports.LogoutDocument, baseOptions);
}
exports.useLogoutMutation = useLogoutMutation;
exports.MeDocument = graphql_tag_1.default `
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
function useMeQuery(baseOptions) {
    return ApolloReactHooks.useQuery(exports.MeDocument, baseOptions);
}
exports.useMeQuery = useMeQuery;
function useMeLazyQuery(baseOptions) {
    return ApolloReactHooks.useLazyQuery(exports.MeDocument, baseOptions);
}
exports.useMeLazyQuery = useMeLazyQuery;
exports.MessageDocument = graphql_tag_1.default `
    query Message {
  messages {
    content
    senderId
    recipientId
    createdAt
  }
}
    `;
function useMessageQuery(baseOptions) {
    return ApolloReactHooks.useQuery(exports.MessageDocument, baseOptions);
}
exports.useMessageQuery = useMessageQuery;
function useMessageLazyQuery(baseOptions) {
    return ApolloReactHooks.useLazyQuery(exports.MessageDocument, baseOptions);
}
exports.useMessageLazyQuery = useMessageLazyQuery;
exports.NotificationDocument = graphql_tag_1.default `
    query notification {
  notification {
    id
    bookRequest
    createdDate
    recipientId
    senderId
    createdDate
    message {
      Title
      Body
    }
  }
}
    `;
function useNotificationQuery(baseOptions) {
    return ApolloReactHooks.useQuery(exports.NotificationDocument, baseOptions);
}
exports.useNotificationQuery = useNotificationQuery;
function useNotificationLazyQuery(baseOptions) {
    return ApolloReactHooks.useLazyQuery(exports.NotificationDocument, baseOptions);
}
exports.useNotificationLazyQuery = useNotificationLazyQuery;
exports.NewNotificationDocument = graphql_tag_1.default `
    subscription newNotification($recipientId: String!) {
  newNotification(recipientId: $recipientId) {
    id
    bookRequest
    createdDate
    recipientId
    senderId
    createdDate
    message {
      Title
      Body
    }
  }
}
    `;
function useNewNotificationSubscription(baseOptions) {
    return ApolloReactHooks.useSubscription(exports.NewNotificationDocument, baseOptions);
}
exports.useNewNotificationSubscription = useNewNotificationSubscription;
exports.QueryBookingDocument = graphql_tag_1.default `
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
function useQueryBookingQuery(baseOptions) {
    return ApolloReactHooks.useQuery(exports.QueryBookingDocument, baseOptions);
}
exports.useQueryBookingQuery = useQueryBookingQuery;
function useQueryBookingLazyQuery(baseOptions) {
    return ApolloReactHooks.useLazyQuery(exports.QueryBookingDocument, baseOptions);
}
exports.useQueryBookingLazyQuery = useQueryBookingLazyQuery;
exports.QueryBookingTimeDocument = graphql_tag_1.default `
    query QueryBookingTime($serviceId: String!, $date: String!) {
  QueryBookingTime(serviceId: $serviceId, date: $date)
}
    `;
function useQueryBookingTimeQuery(baseOptions) {
    return ApolloReactHooks.useQuery(exports.QueryBookingTimeDocument, baseOptions);
}
exports.useQueryBookingTimeQuery = useQueryBookingTimeQuery;
function useQueryBookingTimeLazyQuery(baseOptions) {
    return ApolloReactHooks.useLazyQuery(exports.QueryBookingTimeDocument, baseOptions);
}
exports.useQueryBookingTimeLazyQuery = useQueryBookingTimeLazyQuery;
exports.RegisterDocument = graphql_tag_1.default `
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
function useRegisterMutation(baseOptions) {
    return ApolloReactHooks.useMutation(exports.RegisterDocument, baseOptions);
}
exports.useRegisterMutation = useRegisterMutation;
exports.SearchServicesUserDocument = graphql_tag_1.default `
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
function useSearchServicesUserQuery(baseOptions) {
    return ApolloReactHooks.useQuery(exports.SearchServicesUserDocument, baseOptions);
}
exports.useSearchServicesUserQuery = useSearchServicesUserQuery;
function useSearchServicesUserLazyQuery(baseOptions) {
    return ApolloReactHooks.useLazyQuery(exports.SearchServicesUserDocument, baseOptions);
}
exports.useSearchServicesUserLazyQuery = useSearchServicesUserLazyQuery;
exports.ServiceByCategoryDocument = graphql_tag_1.default `
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
function useServiceByCategoryQuery(baseOptions) {
    return ApolloReactHooks.useQuery(exports.ServiceByCategoryDocument, baseOptions);
}
exports.useServiceByCategoryQuery = useServiceByCategoryQuery;
function useServiceByCategoryLazyQuery(baseOptions) {
    return ApolloReactHooks.useLazyQuery(exports.ServiceByCategoryDocument, baseOptions);
}
exports.useServiceByCategoryLazyQuery = useServiceByCategoryLazyQuery;
exports.ServicesUserDocument = graphql_tag_1.default `
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
function useServicesUserQuery(baseOptions) {
    return ApolloReactHooks.useQuery(exports.ServicesUserDocument, baseOptions);
}
exports.useServicesUserQuery = useServicesUserQuery;
function useServicesUserLazyQuery(baseOptions) {
    return ApolloReactHooks.useLazyQuery(exports.ServicesUserDocument, baseOptions);
}
exports.useServicesUserLazyQuery = useServicesUserLazyQuery;
exports.SignS3Document = graphql_tag_1.default `
    mutation signS3($filename: String!, $filetype: String!) {
  signS3(filename: $filename, filetype: $filetype) {
    url
    signedRequest
  }
}
    `;
function useSignS3Mutation(baseOptions) {
    return ApolloReactHooks.useMutation(exports.SignS3Document, baseOptions);
}
exports.useSignS3Mutation = useSignS3Mutation;
exports.UpdateBookingDocument = graphql_tag_1.default `
    mutation updateBooking($NotificationId: String!, $response: Boolean) {
  updateBooking(NotificationId: $NotificationId, response: $response)
}
    `;
function useUpdateBookingMutation(baseOptions) {
    return ApolloReactHooks.useMutation(exports.UpdateBookingDocument, baseOptions);
}
exports.useUpdateBookingMutation = useUpdateBookingMutation;
exports.UpdateServiceDocument = graphql_tag_1.default `
    mutation updateService($serviceId: String!, $inputService: UpdateServices, $ScheduleBool: Schedulebool, $ScheduleTime: ScheduleTime) {
  updateService(serviceId: $serviceId, inputService: $inputService, ScheduleBool: $ScheduleBool, ScheduleTime: $ScheduleTime)
}
    `;
function useUpdateServiceMutation(baseOptions) {
    return ApolloReactHooks.useMutation(exports.UpdateServiceDocument, baseOptions);
}
exports.useUpdateServiceMutation = useUpdateServiceMutation;
//# sourceMappingURL=graphql-hooks.js.map