import { changePassword } from "./../../modules/Password/changePassword/resolvers";
import { loginResolver } from "../../modules/Auth/login/resolvers";
import { registerResolver } from "../../modules/Auth/register/resolvers";
import { forgotPassword } from "../../modules/Password/forgotPassword/resolvers";
import { fileUpload } from "../../modules/Pictures/uploadS3/resolvers";
import { createService } from "../../modules/Services/create/resolvers";
import { createMessage } from "../../modules/Message/create/resolver";
import { newMessage } from "../../modules/Message/newMessage/resolvers";
import { searchServicesUser } from "../../modules/search/resolvers";
import { findMessage } from "../../modules/Message/QueryMessage/resolvers";
import { Me } from "../../modules/Auth/me/resolvers";
import { Logout } from "../../modules/Auth/logout/resolvers";
import { ServiceByCategory } from "../../modules/Services/QueryServices/resolver";
import { DeleteService } from "../../modules/Services/delete/resolvers";
import { UpdateService } from "../../modules/Services/update/resolvers";
import { findServiceCalendar } from "../../modules/Calendar/QueryCalendar/resolvers";
import { createNotification } from "../../modules/Notification/create/resolver";
import { newNotification } from "../../modules/Notification/newNotification/resolvers";
import { findNotification } from "../../modules/Notification/Querynotification/resolvers";

export const resolvers = [
  loginResolver,
  registerResolver,
  forgotPassword,
  changePassword,
  fileUpload,
  createService,
  createMessage,
  findMessage,
  newMessage,
  searchServicesUser,
  Me,
  Logout,
  ServiceByCategory,
  DeleteService,
  UpdateService,
  findServiceCalendar,
  createNotification,
  newNotification,
  findNotification,
];
