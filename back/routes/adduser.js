var express = require('express');
var router = express.Router();
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Huawei_998',
    database: 'kds'
})

connection.connect(err => {
    if(err) {
        return err;
    }
})

/* GET users listing. */
router.get('/', function(req, res, next) {

    const{ node, obj, Phone_01, Phone_02, Phone_03, Phone_04, Email_01, Email_02, Email_03, Email_04 } = req.query
    const INSERT_USER_QUERY = `INSERT INTO kds.employee(Dept_id, obj, Phone_01, Phone_02, Phone_03, Phone_04, Phone_05,
                                                        Email_01, Email_02, Email_03, Email_04, Job, Name ) 
                               VALUES('${node}', '${obj}', '${Phone_01}', '${Phone_02}', '${Phone_03}', '${Phone_04}', '123', 
                                      '${Email_01}', '${Email_02}', '${Email_03}', '${Email_04}', 'Место установки', '123' )`
    connection.query(INSERT_USER_QUERY, (err, result) => {
        if(err) {
            return res.send(err)
        } else {
            return res.send('usuario adicionado com sucesso')
        }
    })

//    connection.query(SELECT_ALL_USER_QUERY, (err, result) => {
//        if(err) {
//            return res.send(err)
//        } else {
//            return res.json({
//                data: result
//            })
//        }
//    })

});

// connection.end();

module.exports = router;
