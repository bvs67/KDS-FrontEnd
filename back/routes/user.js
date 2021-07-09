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

    const{ id } = req.query
    const SELECT_USER_QUERY = "SELECT ke.Name, ke.Dept_id, ke.Phone_01, ke.Phone_02, ke.Phone_03, ke.Phone_04,\n" +
                              "       ke.Email_01, ke.Email_02, ke.Email_03, ke.Email_04, ke.Job, ke.HComment, ko.id obj, ko.Name obj_Name, ke.id emp_id, kd.id odet_id\n" +
                              "  FROM kds.employee ke \n" +
                              "  LEFT OUTER JOIN kds.kd_obj ko ON ke.obj=ko.id\n" +
                              "  LEFT OUTER JOIN kds.kd_obj_detail kd ON kd.obj=ko.id\n" +
                              " WHERE kd.sh_type='Место установки' AND ke.Dept_id='"+id+"'";

    connection.query(SELECT_USER_QUERY, (err, result) => {
        if(err) {
            return res.send(err)
        } else {
            return res.json({
                data: result
            })
        }
    })

});

// connection.end();

module.exports = router;

