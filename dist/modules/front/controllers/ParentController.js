import { Controller, HttpCode, Methods, isEmpty } from "@damijs/core";
import Ans from "../../../models/Ans";
import Pans from "../../../models/Pans";
class FeedsController extends Controller {
    constructor() {
        super(Ans);
        this.requiredLogin = () => {
            return false;
            // return ["index", "create", "update", "delete", "view"];
        };
        this.check = async (req, res, next) => {
            const model = new Pans();
            const sid = req.params.id;
            const smodel = await model.find(q => {
                return q.andWhere({ sid });
            }).one();
            if (isEmpty(smodel)) {
                res.sendStatus(HttpCode.NOT_FOUND);
            }
            else {
                res.sendStatus(HttpCode.OK);
            }
            next();
        };
        this.parent = async (req, res, next) => {
            const model = new Pans();
            const dataList = req.body;
            try {
                if (model.load(dataList)) {
                    if (await model.save()) {
                        res.sendStatus(HttpCode.ACCEPTED);
                        return next();
                    }
                }
                res.sendStatus(HttpCode.BAD_REQUEST);
            }
            catch (err) {
                console.log(err);
                res.status(HttpCode.INTERNAL_SERVER_ERROR).send({});
            }
            next();
        };
        this.route = () => {
            return [
                { method: Methods.POST, path: "/", action: "create" },
                { method: Methods.GET, path: "/:id", action: "check" },
                { method: Methods.PUT, path: "/", action: "parent" },
            ];
        };
    }
}
export default FeedsController;