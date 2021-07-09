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

    const{ obj, type, name } = req.query
    console.log(obj, type, name)
    const INSERT_KIT_QUERY = 'INSERT INTO `kds`.`kd_obj_detail` (`obj`,`sh_type`,`sh_name`,`sh_quant`,`sh_weight`,`sh_serial`,`sh_inventory`) VALUES ('+obj+',\''+type+'\',\''+name+'\',\'\',\'\',\'\',\'\'); '
    connection.query(INSERT_KIT_QUERY, (err) => {
        if(err) {
            return res.send(err)
        } else {
            return res.send('Empty UMB Kit added success')
        }
    })

});

// connection.end();

module.exports = router;
