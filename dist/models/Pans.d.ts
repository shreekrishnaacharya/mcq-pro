import { ActiveRecords } from "@damijs/core";
declare class Pans extends ActiveRecords {
    constructor();
    rules: () => {
        id: string[];
        sid: string[];
        ans: string[];
        create_at: any[];
    };
}
export default Pans;
