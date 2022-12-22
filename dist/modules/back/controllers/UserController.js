import UserModel from "../../../models/User";
import { DataProvider } from "@damijs/core";
import { Controller, HttpCode, Methods } from "@damijs/core";
import Ans from "../../../models/Ans";
class UserController extends Controller {
    constructor() {
        super(UserModel);
        this.requiredLogin = () => {
            return true;
        };
        this.profile = async (req, res, next) => {
            const userModel = req.user;
            try {
                res.send(await userModel.toJson());
            }
            catch (err) {
                console.log(err);
                res.sendStatus(HttpCode.INTERNAL_SERVER_ERROR);
            }
            next();
        };
        this.mypost = async (req, res, next) => {
            const model = new Ans();
            const dataProvider = new DataProvider({ request: req, response: res, size: 10 });
            const userModel = req.user;
            try {
                model.getFkUser().getFkVote(userModel.id);
                dataProvider.setModel(model);
                dataProvider.query((query) => {
                    return query.andWhere({ 'post.fk_user_id': userModel.id });
                });
                const result = await dataProvider.getList();
                res.send(await result.toJson());
            }
            catch (err) {
                console.log(err);
                res.sendStatus(HttpCode.INTERNAL_SERVER_ERROR);
            }
            next();
        };
        this.updateProfile = async (req, res, next) => {
            const userModel = req.user;
            // const userModel = await this.getModel().findOne(1)
            try {
                if (userModel.load(req.body) || userModel.load(req.files)) {
                    await userModel.savePimg();
                    await userModel.saveCimg();
                    if (await userModel.update(userModel.id)) {
                        res.send(await userModel.toJson());
                    }
                    else {
                        res.sendStatus(HttpCode.BAD_REQUEST);
                    }
                }
                else {
                    res.sendStatus(HttpCode.BAD_REQUEST);
                }
            }
            catch (err) {
                console.log(err);
                res.sendStatus(HttpCode.INTERNAL_SERVER_ERROR);
            }
            next();
        };
        this.route = () => {
            return [
                { method: Methods.GET, path: "/", action: "profile" },
                { method: Methods.GET, path: "/mypost", action: "mypost" },
                { method: Methods.PUT, path: "/", action: "updateProfile" },
            ];
        };
    }
}
export default UserController;
