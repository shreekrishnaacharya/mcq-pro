import { DamiApp } from "@damijs/core";
import appConfig from "./config/app";
const damiApp = new DamiApp();
damiApp.init(appConfig);
// const app = damiApp.getApp();
// const express = damiApp.getExpress();
// app.use(express.static('public'))
damiApp.run();
// console.log(app)
