import { Controller, DataProvider, HttpCode, isEmpty, Methods } from "@damijs/core";
import Ans from "../../../models/Ans";
class StudentController extends Controller {
    constructor() {
        super(Ans);
        this.requiredLogin = () => {
            // return false
            return true;
            // return ["index", "create", "update", "delete", "view"];
        };
        this.index = async (req, res, next) => {
            const model = this.getModel();
            const dataProvider = new DataProvider({ request: req, response: res, size: 10 });
            try {
                // model.getMeta();
                dataProvider.setModel(model);
                const result = await dataProvider.getList();
                res.send(await result.toJson());
            }
            catch (err) {
                console.log(err);
                res.sendStatus(HttpCode.INTERNAL_SERVER_ERROR);
            }
            next();
        };
        this.view = async (req, res, next) => {
            const model = this.getModel();
            model.setScenario("VIEW");
            try {
                const result = await model.getFkUser().find((query) => {
                    return query.andWhere({ 'post.id': req.params.id });
                }).one();
                if (isEmpty(result)) {
                    res.status(HttpCode.NOT_FOUND);
                }
                else {
                    res.send(await result.toJson());
                }
            }
            catch (err) {
                res.sendStatus(HttpCode.INTERNAL_SERVER_ERROR);
            }
            next();
        };
        this.route = () => {
            return [
                { method: Methods.GET, path: "/", action: "index" },
                { method: Methods.GET, path: "/:id", action: "view" },
            ];
        };
    }
}
export default StudentController;
