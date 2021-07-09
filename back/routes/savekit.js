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

    const{ json } = req.query
    // console.log(json)
    let kit = JSON.parse(json)
    // console.log(kit)
    const kitLine = kit;
    // console.log(kitLine);
    let UPDATE_KIT_QUERY = 'UPDATE `kds`.`kd_obj_detail` SET `sh_name`=\''+kitLine.sh_name+'\', `sh_quant`=\''+kitLine.sh_quant+'\', `sh_weight`=\''+kitLine.sh_weight+'\', `sh_serial`=\''+kitLine.sh_serial+
                                          '\', `sh_inventory`=\''+kitLine.sh_inventory+'\'  where `id`='+kitLine.id+'; '
    // console.log(UPDATE_KIT_QUERY);
//    let kitArray = kit.map(kitLine => {
//            return ('UPDATE `kds`.`kd_obj_detail` SET `sh_name`=\''+kitLine.sh_name+'\', `sh_quant`=\''+kitLine.sh_quant+'\', `sh_weight`=\''+kitLine.sh_weight+'\', `sh_serial`=\''+kitLine.sh_serial+
//                                          '\', `sh_inventory`=\''+kitLine.sh_inventory+'\'  where `id`='+kitLine.id+';  '
//                   );
//            });
//    let UPDATE_KIT_QUERY = '';
//    for (let kitSTR of kitArray) {
//        UPDATE_KIT_QUERY = UPDATE_KIT_QUERY + kitSTR;
//    }

    connection.query(UPDATE_KIT_QUERY, (err) => {
        if(err) {
            return res.send(err)
        } else {
            return res.send('KDS UMB kit saved')
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
