import { front, back } from "../modules"

const ContorllerList = {
  api: {
    ...front,
    admin: back
  }
};
export default ContorllerList;