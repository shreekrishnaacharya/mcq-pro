declare const ContorllerList: {
    api: {
        admin: {
            auth: import("../modules/back/controllers/AuthController").default;
            user: import("../modules/back/controllers/UserController").default;
        };
        feeds: import("../modules/front/controllers/FeedsController").default;
    };
};
export default ContorllerList;
