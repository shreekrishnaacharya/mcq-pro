import { Methods } from "@damijs/core";
import { Controller } from "@damijs/core";
import Dashboard from "../../../helpers/Dashboard";
class DashboardController extends Controller {
    constructor() {
        super("");
        this.requiredLogin = () => {
            return true;
        };
        this.index = async (req, res, next) => {
            const dashboard = new Dashboard();
            dashboard.setDate("2020-01-01", "2023-01-01");
            const result = {
                minicard: await dashboard.getMinCard(),
                trend: await dashboard.getTrend(),
            };
            res.send(result);
            next();
        };
        this.route = () => {
            return [
                { method: Methods.GET, path: "/", action: "index" },
            ];
        };
    }
}
export default DashboardController;
