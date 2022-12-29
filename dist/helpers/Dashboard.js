import { Dami } from "@damijs/core";
class Dashboard {
    setDate(from, to) {
        // this.from = (new Date(from)).getTime();
        // this.to = (new Date(to)).getTime();
        this.from = from + " 00:00:00";
        this.to = to + " 00:00:00";
    }
    async getMinCard() {
        let query = `SELECT COUNT(id) as total FROM mans`;
        const total = await Dami.db.queryOne(query);
        query = `SELECT COUNT(id) as total,classno FROM mans GROUP BY classno`;
        const classno = await Dami.db.query(query);
        query = `SELECT COUNT(id) as total,gender FROM mans GROUP BY gender`;
        const gender = await Dami.db.query(query);
        query = `SELECT COUNT(id) as total,age FROM mans GROUP BY age`;
        const age = await Dami.db.query(query);
        query = `SELECT COUNT(id) as total FROM mans WHERE create_at<=? AND create_at>=?`;
        const today = await Dami.db.queryOne([query, [this.to, this.to]]);
        let cdata = { 9: 0, 10: 0, 11: 0, 12: 0 };
        classno.forEach(e => {
            cdata[e['classno']] = e['total'];
        });
        let mdata = { M: 0, F: 0 };
        gender.forEach(e => {
            mdata[e['gender']] = e['total'];
        });
        let adata = {};
        age.forEach(e => {
            adata[e['age']] = e['total'];
        });
        return {
            total: total['total'],
            classno: cdata,
            gender: mdata,
            age: adata,
            today: today['total']
        };
    }
    async getTrend() {
        let query = "SELECT COUNT(id) as cnt,classno,DATE_FORMAT(`create_at`, '%d')as dat FROM mans WHERE create_at>=? and create_at<=? GROUP BY classno,dat";
        const trend = await Dami.db.query([query, [this.from, this.to]]);
        let data = { 9: [], 10: [], 11: [], 12: [] };
        trend.forEach(e => {
            data[e['classno']].push({ cnt: e["cnt"], dat: e['dat'] });
        });
        return data;
    }
    async getAns() {
        let query = "SELECT COUNT(id)as value,status FROM post WHERE create_at>=? and create_at<=? GROUP BY status";
        return await Dami.db.query([query, [this.from, this.to]]);
    }
}
export default Dashboard;
