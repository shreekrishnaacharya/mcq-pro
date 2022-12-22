import { front, back } from "../modules";
const ContorllerList = {
    api: Object.assign(Object.assign({}, front), { admin: back })
};
export default ContorllerList;
