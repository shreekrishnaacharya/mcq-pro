// import { Dami, QueryBuild } from "@damijs/core";
// // import Ans from"../models/Ans";

// class Dashboard {
//     from: number | string
//     to: number | string
//     setDate(from: string, to: string) {
//         // this.from = (new Date(from)).getTime();
//         // this.to = (new Date(to)).getTime();
//         this.from = from + " 00:00:00"
//         this.to = to + " 00:00:00"
//     }

//     async getMinCard() {
//         let query = `SELECT COUNT(id) as total, SUM(IF(create_at<=? AND create_at>=?,1,0))as new FROM user`
//         const users = await Dami.db.queryOne([query, [this.from, this.to]]);
//         query = `SELECT COUNT(id) as total, SUM(IF(create_at<=? AND create_at>=?,1,0))as new FROM post WHERE ptype=${Ans.type.POST}`
//         const post = await Dami.db.queryOne([query, [this.from, this.to]]);
//         query = `SELECT COUNT(id) as total, SUM(IF(create_at<=? AND create_at>=?,1,0))as new FROM post WHERE ptype=${Ans.type.COMMENT}`
//         const comments = await Dami.db.queryOne([query, [this.from, this.to]]);
//         query = `SELECT COUNT(id) as total, SUM(IF(create_at<=? AND create_at>=?,1,0))as new FROM user_votes`
//         const vote = await Dami.db.queryOne([query, [this.from, this.to]]);
//         query = `SELECT COUNT(id) as total, SUM(IF(create_at<=? AND create_at>=?,1,0))as new FROM report_post`
//         const report = await Dami.db.queryOne([query, [this.from, this.to]]);
//         return {
//             users,
//             post,
//             comments,
//             vote,
//             report
//         }
//     }

//     async getTrend() {
//         let query = "SELECT COUNT(id) as cnt,DATE_FORMAT(`create_at`, '%b')as dat FROM user WHERE create_at>=? and create_at<=? GROUP BY dat";
//         const user = await Dami.db.query([query, [this.from, this.to]]);
//         query = "SELECT COUNT(id) as cnt,DATE_FORMAT(`create_at`, '%b')as dat FROM post WHERE create_at>=? and create_at<=? GROUP BY dat";
//         const post = await Dami.db.query([query, [this.from, this.to]]);
//         query = "SELECT COUNT(id) as cnt,DATE_FORMAT(`create_at`, '%b')as dat FROM report_post WHERE create_at>=? and create_at<=? GROUP BY dat";
//         const report = await Dami.db.query([query, [this.from, this.to]]);
//         return {
//             user,
//             post,
//             report
//         }
//     }
//     async getAnss() {
//         let query = "SELECT COUNT(id)as value,status FROM post WHERE create_at>=? and create_at<=? GROUP BY status";
//         return await Dami.db.query([query, [this.from, this.to]]);
//     }

// }

// export default Dashboard;