import { ActiveRecords } from "@damijs/core";
class Pans extends ActiveRecords {
    constructor() {
        super("pans");
        this.rules = () => {
            return {
                id: ['number'],
                sid: ['required', 'number'],
                ans: ['required', 'string'],
                create_at: []
            };
        };
        this.init();
    }
}
export default Pans;
