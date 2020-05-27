"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.CreateMessageDocument = graphql_tag_1.default `
    mutation createMessage($content: String!, $recipientId: String!) {
  createMessage(message: {content: $content, recipientId: $recipientId})
}
    `;
function useCreateMessageMutation(baseOptions) {
    return ApolloReactHooks.useMutation(exports.CreateMessageDocument, baseOptions);
}
exports.useCreateMessageMutation = useCreateMessageMutation;
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
    message {
      Title
      Body
    }
    senderId
    recipientId
    createdDate
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
    mutation signS3($filename: String!, $filetype: String!, $id: String!) {
  signS3(filename: $filename, filetype: $filetype, id: $id) {
    url
    signedRequest
  }
}
    `;
function useSignS3Mutation(baseOptions) {
    return ApolloReactHooks.useMutation(exports.SignS3Document, baseOptions);
}
exports.useSignS3Mutation = useSignS3Mutation;
//# sourceMappingURL=graphql-hooks.js.map