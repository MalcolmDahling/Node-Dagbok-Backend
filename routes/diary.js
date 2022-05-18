var express = require('express');
var router = express.Router();

const cors = require('cors');
router.use(cors());


router.get('/', function(req, res, next) {

    req.app.locals.db.collection('diary').find().toArray()
        .then(result => {
            res.send(result);
        });
});

router.post('/', function(req, res){

    req.app.locals.db.collection('diary').insertOne(req.body)
        .then(result => {
            console.log(result);
        });
});

module.exports = router;
