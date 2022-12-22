import { ActiveRecords, Dami } from "@damijs/core";
class Ans extends ActiveRecords {
    constructor() {
        super("mans");
        this.init()
    }
    rules = () => {
        return {
            id: ['number'],
            name: ['required', 'string', { max: 100 }],
            classno: ['required', 'string', { max: 5 }],
            section: ['required', 'string', { max: 20 }],
            rollno: ['required', 'string', { max: 10 }],
            gender: ['required', 'string', { max: 1 }],
            age: ['required', 'string', { max: 2 }],
            ans: ['required', 'string', { min: 3 }],
            create_at: []
        };
    }
}
export default Ans;