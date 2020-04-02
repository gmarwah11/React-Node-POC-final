const router = require('express').Router();
const mysql = require('mysql')
const con = require('../../../db/common/connection')
const datetime = require('node-datetime');
const path = require('path')
const { Client } = require('@elastic/elasticsearch')
const client = new Client({ node: 'http://localhost:9200' })

var multer = require('multer')
// define multer storage configuration     
const storage = require('../../.././logics/file')
const upload = multer({ storage: storage });

let dt = datetime.create();
let uploadedAt = dt.format('Y-m-d H:M:S');

//upload
router.post('/upload', upload.single('documents'), (req, res, next) => {
    try {
        const file = req.file
        if (!file) {
            res.status(400).json({
                "status": "failed",
                "code": "400",
                "message": "Please upload file"
            });

        }
        let b = req.body.title
        let c = req.body.description
        let d = req.file.originalname
        let e = path.extname(req.file.originalname)
        let f = req.file.path
        let g = req.body.type
        let h = req.body.authority
        let i = req.body.source
        let j = req.body.market
        let k = req.body.language
        let l = req.body.country
        let m = req.body.uploadedBy
        let n = uploadedAt;
        console.log(n)
            con.query("INSERT INTO Documents  VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)", [ b, c, d, e, f, g, h, i, j, k, l, m, n], function (err, result, fields) {
                if (err) throw err;
                res.status(200).json({
                    "status": "success",
                    "code": "200",
                    "message": "Document uploaded successfully"
                });
        
            })
    }
    catch (err) {
        console.log(error.message);
        res.status(200).json({
            "status": "failed",
            "code": "500",
            "message": error.message
        });
    }

})


///fetch
router.get('/fetch/:fn', (req, res) => {
    let a = req.params.fn
        con.query("SELECT * FROM Documents where id = ?", [a], function (err, result, fields) {
            if (err) throw err;
            res.send(result);
        });
    });


    router.get('/list', (req, res) => {
        con.query("SELECT * FROM Documents", function (err, result, fields) {
            if (err) throw err;
            res.send(result);
        });
    });


module.exports = router;
