import User from "../models/User";
import { Authorization } from "@damijs/core";
import controllers from '../controllers';
import dotenv from 'dotenv';
import ServerRender from "../helpers/ServerRender";
dotenv.config();
const appConfig = {
    appName: "MCQ",
    port: 8080,
    production: false,
    // debug: {
    //   queryLog: false,
    //   timeLog: false,
    //   defaultLogin: 5
    // },
    loginUser: {
        "/api/admin": { authUser: User }
    },
    viewEngine: 'ejs',
    controllers: controllers,
    publicDir: { path: './public/static', from: "/static" },
    // services: [services],
    // baseUrl: 'http://ventvoila.com',
    // baseUrl: 'http://referendum.ktm.yetiappcloud.com/',
    baseUrl: 'http://localhost:8080',
    basePath: 'api',
    resourcePath: 'storage',
    serverRender: [
        {
            path: "/",
            page: "public/index.html"
        },
    ],
    path: {
        '@uploads': 'uploads/',
        '@view': 'view/',
    },
    initAction: () => { },
    requiredLogin: () => {
        return true;
    },
    beforeAction: () => {
        return [
            Authorization,
        ];
    },
    afterRequest: ServerRender,
    enableRbac: false,
    dbConfig: {
        connectionLimit: 20,
        // host: "b70zcwsbq3ylzmoguajc-mysql.services.clever-cloud.com",
        // user: "uo50hoespbnmnf0u",
        // password: "lulhw1Vxa5RoicwUdw0j",
        // database: "b70zcwsbq3ylzmoguajc"
        //************************************/
        host: 'localhost',
        user: 'root2',
        password: 'kamal12345',
        database: 'voteup',
        port: 3306,
        //***************yeti cloud*********************/
        // host: "node8452-referendum.ktm.yetiappcloud.com",
        // user: "root",
        // password: "SbwqYb3ufm",
        // database: "voteup"
        //************************************/
        // host: "sql.freedb.tech",
        // user: "freedb_root2",
        // password: "B8fW*$qhwm5Y%f6",
        // database: "freedb_voteup"
        //************************************/
        // host: "remotemysql.com",
        // user: "OSJDD7zdS8",
        // password: "Yvec2HvEJE",
        // database: "OSJDD7zdS8",
        //**********************************/
        // host: "db4free.net",
        // user: "sksharma72000",
        // password: "77d09812",
        // database: "vote_up"
        //**********************************/
        // host: "dummy",
        // user: "dummy",
        // password: "dummy",
        // database: "epiz_30951805_vote_up",
        // dummy: true
    }
};
export default appConfig;
