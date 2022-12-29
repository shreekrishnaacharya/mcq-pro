import AuthController from "./AuthController";
import DashboardController from "./DashboardController";
import SettingController from "./SettingController";
import StudentController from "./StudentController";
import UserController from "./UserController";
const ContorllerList = {
    auth: new AuthController(),
    user: new UserController(),
    student: new StudentController(),
    setting: new SettingController(),
    dashboard: new DashboardController()
};
export default ContorllerList;
