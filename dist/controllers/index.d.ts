declare const ContorllerList: {
    api: {
        admin: {
            auth: import("../modules/back/controllers/AuthController").default;
            user: import("../modules/back/controllers/UserController").default;
            student: import("../modules/back/controllers/StudentController").default;
            setting: import("../modules/back/controllers/SettingController").default;
            dashboard: import("../modules/back/controllers/DashboardController").default;
        };
        parent: import("../modules/front/controllers/ParentController").default;
        feeds: import("../modules/front/controllers/FeedsController").default;
    };
};
export default ContorllerList;
