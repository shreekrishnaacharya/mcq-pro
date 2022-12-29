import { ActiveRecords } from "@damijs/core";
class Setting extends ActiveRecords {
    constructor() {
        super("setting");
        this.rules = () => {
            return {
                id: ['number'],
                code: ['string', { max: 5 }],
                accept: ['number'],
            };
        };
        this.init();
    }
}
export default Setting;
