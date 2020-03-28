const config = { 
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: 'root',
    database: 'regask_dms',
    ssl  : {
        // DO NOT DO THIS
        // set up your ca correctly to trust the connection
        rejectUnauthorized: false
    },
    flags: '-FOUND_ROWS,IGNORE_SPACE'
}
module.exports = config;