const mysql = require('mysql')
var elasticsearch = require('elasticsearch');
const con = require('../../../db/common/connection')

module.exports = () =>{

var client = new elasticsearch.Client({
  host: 'localhost:9200'
});

let i = 0

con.connect(function(err) {
    if (err) throw err;
    //Select all customers and return the result object:
    con.query("SELECT * FROM Documents", function (err, result, fields) {
      if (err) throw err;
      const arr = result.length;
      for( i ; i < arr ; i++){
    client.index({
        index: 'documents',
        id: result[i].id,
        type: 'test',
        body: {
            "title" : result[i].title,
            "description" : result[i].description,
            "filename" : result[i].filename,
            "fileextension" : result[i].fileextension,
            "path" : result[i].path,
            "type" : result[i].type,
            "authority" : result[i].authority,
            "source" : result[i].source,
            "market" : result[i].market,
            "language" : result[i].language,
            "country" : result[i].country,
            "uploadedBy" : result[i].uploadedBy,
            "uploadedDateTime" : result[i].uploadedDateTime
        }
    }, function(err, resp, status) {
        
    });
}
    
  })

});


}