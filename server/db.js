import mysql from 'mysql';

export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '4amyami12345',
    database: 'blog',
    port:'3306'
})


// const config = {
//     host: "localhost",
//     user: "root",
//     password: "4amyami12345",
//     port: 3306,
//     database: "blog"
// };

// const db = mysql.createPool(config);

// module.exports = (query) => {
//    return  new Promise((resolve, reject) => {
//         db.getConnection((err, sql) => {
//             if(err){
//                 reject(err)
//                 console.log("db error:", err)
//             }else{
//                 sql.query(query,(err, results) =>{
//                     if(err){
//                         reject(err)
//                         console.log('sql error:', err)
//                     }else{
//                         resolve(results)
//                     }
//                     sql.release()
//                 })
//             }
//         })
//     })
// }