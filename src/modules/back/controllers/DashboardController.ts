import { HttpCode, Methods, NextFunction, QueryBuild, Request, Response } from "@damijs/core";
import { Controller, DataProvider } from "@damijs/core";
// import Dashboard from "../../../helpers/Dashboard";
import Ans from"../../../models/Ans";

class DashboardController extends Controller<Ans> {
    constructor() {
        super("");
    }

    requiredLogin = () => {
        return true;
    };

    index = async (req: Request, res: Response, next: NextFunction) => {
        // const dashboard = new Dashboard();
        // console.log(req.user,"this is user")
        // dashboard.setDate("2020-01-01", "2023-01-01")
        // const result = {
        //     minicard: await dashboard.getMinCard(),
        //     trend: await dashboard.getTrend(),
        // }
        // res.send(result)
        next()
    }

    popular = async (req: Request, res: Response, next: NextFunction) => {
        const model = new Ans();
        const dataProvider = new DataProvider({ request: req, response: res, size: 5, sort: { id: 'desc' } });
        try {
            model.getFkUser()
            dataProvider.setModel(model);
            // dataProvider.query((query: QueryBuild) => {
            //     return query.andWhere({ 'comments.fk_post_id': 1 })
            // })
            const result = await dataProvider.getList();
            res.send(await result.toJson());
        } catch (err) {
            console.log(err)
            res.sendStatus(HttpCode.INTERNAL_SERVER_ERROR);
        }
        next()
    }
    route = () => {
        return [
            { method: Methods.GET, path: "/", action: "index" },
        ];
    };
}

export default DashboardController;
