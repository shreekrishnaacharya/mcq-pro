import { ActiveRecords } from "@damijs/core";
class Pans extends ActiveRecords {
    constructor() {
        super("pans");
        this.init()
    }
    rules = () => {
        return {
            id: ['number'],
            sid: ['required', 'number'],
            ans: ['required', 'string'],
            create_at: []
        };
    }
}
export default Pans;