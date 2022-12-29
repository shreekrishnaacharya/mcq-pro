import { HttpCode, Methods, NextFunction, QueryBuild, Request, Response } from "@damijs/core";
import { Controller, DataProvider } from "@damijs/core";
import Dashboard from "../../../helpers/Dashboard";
import Ans from "../../../models/Ans";

class DashboardController extends Controller<Ans> {
    constructor() {
        super("");
    }

    requiredLogin = () => {
        return true;
    };

    index = async (req: Request, res: Response, next: NextFunction) => {
        const dashboard = new Dashboard();
        dashboard.setDate("2020-01-01", "2023-01-01")
        const result = {
            minicard: await dashboard.getMinCard(),
            trend: await dashboard.getTrend(),
        }
        res.send(result)
        next()
    }

    route = () => {
        return [
            { method: Methods.GET, path: "/", action: "index" },
        ];
    };
}

export default DashboardController;
