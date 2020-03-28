const router = require('express').Router();
const mysql = require('mysql')
const con = require('../../../db/common/connection')
var datetime = require('node-datetime');
var path = require('path')
const { Client } = require('@elastic/elasticsearch')
const client = new Client({ node: 'http://localhost:9200' })

var multer = require('multer')
// define multer storage configuration     
const storage = require('../../.././logics/file')
const upload = multer({ storage: storage });

var dt = datetime.create();
var formatted = dt.format('Y-m-d H:M:S');

//upload
router.post('/upload', upload.single('documents'), (req, res, next) => {
    try {
        const file = req.file
        console.log(file)
        if (!file) {
            res.status(400).json({
                "status": "failed",
                "code": "400",
                "message": "Please upload file"
            });

        }


        const a = req.body.id
        const b = req.body.title
        const c = req.body.description
        const d = req.file.originalname
        const e = path.extname(req.file.originalname)
        const f = req.file.path
        const g = req.body.type
        if (g == "Regulation") {
            var h = req.body.authority
        }
        else {
            h = "NULL"
        }
        const i = req.body.source
        const j = req.body.market
        const k = req.body.language
        const l = req.body.country
        const m = req.body.uploadedBy
        const n = formatted;
        console.log(n)
            con.query("INSERT INTO Documents  VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)", [a, b, c, d, e, f, g, h, i, j, k, l, m, n], function (err, result, fields) {
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
    const a = req.params.fn
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