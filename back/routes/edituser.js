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
    const{ id, obj } = req.query
    const{ Phone_01, Email_01 } = req.query
    const{ Phone_02, Email_02 } = req.query
    const{ Phone_03, Email_03 } = req.query
    const{ Phone_04, Email_04 } = req.query
    const EDIT_USER_QUERY = `UPDATE kds.employee set Phone_01='${Phone_01}', Phone_02='${Phone_02}', Phone_03='${Phone_03}', Phone_04='${Phone_04}', HComment='${obj}',
                                                     Email_01='${Email_01}', Email_02='${Email_02}', Email_03='${Email_03}', Email_04='${Email_04}'\n` +
                           " WHERE Dept_id='"+id+"'";
    connection.query(EDIT_USER_QUERY, (err, result) => {
        if(err) {
            return res.send(err)
        } else {
            return res.send('UPDATE kds.employee - success')
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
