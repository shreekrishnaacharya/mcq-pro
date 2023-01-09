import FeedsController from "./FeedsController";
import ParentController from "./ParentController";

const ContorllerList = {
  // auth: new AuthController(),
  parent: new ParentController(),
  feeds: new FeedsController(),
};
export default ContorllerList;
