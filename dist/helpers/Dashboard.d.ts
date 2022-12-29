declare class Dashboard {
    from: number | string;
    to: number | string;
    setDate(from: string, to: string): void;
    getMinCard(): Promise<{
        total: any;
        classno: {
            9: number;
            10: number;
            11: number;
            12: number;
        };
        gender: {
            M: number;
            F: number;
        };
        age: {};
        today: any;
    }>;
    getTrend(): Promise<{
        9: any[];
        10: any[];
        11: any[];
        12: any[];
    }>;
    getAns(): Promise<object[]>;
}
export default Dashboard;
