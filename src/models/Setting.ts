import { ActiveRecords, Dami } from "@damijs/core";
class Setting extends ActiveRecords {
    constructor() {
        super("setting");
        this.init()
    }
    rules = () => {
        return {
            id: ['number'],
            code: ['string', { max: 5 }],
            accept: ['number'],
        };
    }
}
export default Setting;