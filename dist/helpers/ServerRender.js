import { Dami } from '@damijs/core';
function ServerRender(req, res, next) {
    if (res.headersSent) {
        return next();
    }
    const baseUrl = Dami.baseUrl + req.originalUrl;
    const logoUrl = Dami.baseUrl + "/static/logo.png";
    switch (req.path) {
        case "/admin/guest":
            return login(req, res, next);
        case "/admin":
            return home(req, res, next);
        case "/admin/student":
            return student(req, res, next);
        case "/admin/setting":
            return setting(req, res, next);
        case "/":
            return home(req, res, next);
        default:
            return notfound(req, res, next);
    }
    function title(res, title) {
        res.title = title;
    }
    function setMeta(res, meta) {
        res.meta = meta;
    }
    function login(req, res, next) {
        title(res, "Login | " + Dami.appName);
        const meta = [
            {
                property: "og:url",
                content: baseUrl
            },
            {
                property: "og:title",
                content: "Login | " + Dami.appName
            },
            {
                property: "og:description",
                content: Dami.appName + " is a platform designed to enable dynamic decision-making, liquid representation, and sound governance through collective intelligence in any political culture."
            },
            {
                property: "og:image",
                content: logoUrl
            },
        ];
        setMeta(res, meta);
        return next();
    }
    function home(req, res, next) {
        title(res, "Student Grade Prediction | " + Dami.appName);
        const meta = [
            {
                property: "og:url",
                content: baseUrl
            },
            {
                property: "og:title",
                content: "Student Grade Prediction | " + Dami.appName
            },
            {
                property: "og:description",
                content: Dami.appName + " is a platform designed to enable dynamic decision-making, liquid representation, and sound governance through collective intelligence in any political culture."
            },
            {
                property: "og:image",
                content: logoUrl
            },
        ];
        setMeta(res, meta);
        return next();
    }
    function setting(req, res, next) {
        title(res, "Setting | " + Dami.appName);
        const meta = [
            {
                property: "og:url",
                content: baseUrl
            },
            {
                property: "og:title",
                content: "Setting | " + Dami.appName
            },
            {
                property: "og:description",
                content: Dami.appName + " is a platform designed to enable dynamic decision-making, liquid representation, and sound governance through collective intelligence in any political culture."
            },
            {
                property: "og:image",
                content: logoUrl
            },
        ];
        setMeta(res, meta);
        return next();
    }
    function student(req, res, next) {
        title(res, "Student | " + Dami.appName);
        const meta = [
            {
                property: "og:url",
                content: baseUrl
            },
            {
                property: "og:title",
                content: "Student | " + Dami.appName
            },
            {
                property: "og:description",
                content: "Student post, personal detail, account detail"
            },
            {
                property: "og:image",
                content: logoUrl
            },
        ];
        setMeta(res, meta);
        return next();
    }
    function notfound(req, res, next) {
        title(res, "Not Found | " + Dami.appName);
        const meta = [
            {
                property: "og:url",
                content: baseUrl
            },
            {
                property: "og:title",
                content: "Not Found | " + Dami.appName
            },
            {
                property: "og:description",
                content: "The page you are looking for does not exist or has been removed"
            },
            {
                property: "og:image",
                content: logoUrl
            },
        ];
        setMeta(res, meta);
        return next();
    }
}
export default ServerRender;
