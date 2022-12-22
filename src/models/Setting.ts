import { ActiveRecords, Dami } from "@damijs/core";
class Setting extends ActiveRecords {
    constructor() {
        super("setting");
        this.init()
    }
    rules = () => {
        return {
            id: ['number'],
            review_limit: ['number'],
            vote_limit: ['number'],
            approve_on: ['required', 'number'],
            comment_limit: ['number'],
        };
    }
}
export default Setting;