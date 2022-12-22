import { ActiveRecords } from "@damijs/core";
class Setting extends ActiveRecords {
    constructor() {
        super("setting");
        this.rules = () => {
            return {
                id: ['number'],
                review_limit: ['number'],
                vote_limit: ['number'],
                approve_on: ['required', 'number'],
                comment_limit: ['number'],
            };
        };
        this.init();
    }
}
export default Setting;
