import AuthController from "./AuthController";
import DashboardController from "./DashboardController";
import SettingController from "./SettingController";
import StudentController from "./StudentController";
import UserController from "./UserController";
declare const ContorllerList: {
    auth: AuthController;
    user: UserController;
    student: StudentController;
    setting: SettingController;
    dashboard: DashboardController;
};
export default ContorllerList;
