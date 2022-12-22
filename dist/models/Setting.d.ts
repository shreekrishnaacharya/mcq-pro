import { ActiveRecords } from "@damijs/core";
declare class Setting extends ActiveRecords {
    constructor();
    rules: () => {
        id: string[];
        review_limit: string[];
        vote_limit: string[];
        approve_on: string[];
        comment_limit: string[];
    };
}
export default Setting;
