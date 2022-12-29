import { ActiveRecords } from "@damijs/core";
declare class Setting extends ActiveRecords {
    constructor();
    rules: () => {
        id: string[];
        code: (string | {
            max: number;
        })[];
        accept: string[];
    };
}
export default Setting;
