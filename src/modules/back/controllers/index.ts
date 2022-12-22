import AuthController from "./AuthController";
import DashboardController from "./DashboardController";
import FeedsController from "./FeedsController";
import SettingController from "./SettingController";
import UserController from "./UserController";

const ContorllerList = {
  auth: new AuthController(),
  user: new UserController(),
  // feeds: new FeedsController(),
  // setting: new SettingController(),
  // dashboard: new DashboardController()
};
export default ContorllerList;
