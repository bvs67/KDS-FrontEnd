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
    // var beg_segment, end_segment
    const{ pad_id, pad_name, emp_id, odet_id } = req.query
// console.log(h_beg, h_end, id)
//    if (h_beg==='null') {beg_segment='h_begin=null, '} else { beg_segment='h_begin=\''+h_beg+'\', ' }
//    if (h_end==='null') {end_segment='h_end=null '} else { end_segment='h_end=\''+h_end+'\' ' }
//    if (isEmpty(h_end)) { h_end='null' }
    const TRANS_PAD_QUERY = 'CALL transfer_pad(\''+pad_id+'\', \''+pad_name+'\', '+emp_id+', '+odet_id+')'
    console.log(TRANS_PAD_QUERY)
    connection.query(TRANS_PAD_QUERY, (err) => {
        if(err) {
            return res.send(err)
        } else {
            return res.send('KDS transfer pad completed')
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
