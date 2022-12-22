import { ActiveRecords } from "@damijs/core";
declare class Ans extends ActiveRecords {
    constructor();
    rules: () => {
        id: string[];
        name: (string | {
            max: number;
        })[];
        classno: (string | {
            max: number;
        })[];
        section: (string | {
            max: number;
        })[];
        rollno: (string | {
            max: number;
        })[];
        gender: (string | {
            max: number;
        })[];
        age: (string | {
            max: number;
        })[];
        ans: (string | {
            min: number;
        })[];
        create_at: any[];
    };
}
export default Ans;
