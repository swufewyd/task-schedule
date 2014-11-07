/*
 * GET users listing.
 */
//md5
var crypto = require('crypto');

//mysql
var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'whiteboard',
    port: 3306
});
//redis
var redis = require("redis");
var client = redis.createClient(6379, '127.0.0.1', {});

// var UsersModel = require("./../models").Users;
var path = require('path');

exports.checkSession = function (req,res) {

    client.hgetall(req.sessionID, function (err, obj) {
        if(obj!=null){
            obj.isLogin="1";
            res.json(obj);
        }else{
            res.json({"isLogin":"0"});
        }
    });

};

exports.login = function (req, res) {

    client.on("error", function (err) {
        console.log("Error " + err);
    });

    var username = req.body.loginData.username;
    var md5 = crypto.createHash('md5');
    var password = md5.update(req.body.loginData.password).digest('hex');

    var sql = 'select * from wb_user where username='+conn.escape(username)+' and password='+conn.escape(password);
    conn.query(sql, function(err, rows, fields) {
        if (err) throw err;


        if(rows.length){
            client.hmset(req.sessionID, rows[0]);
            res.json(rows[0]);
        }else{
            res.send(404);
            res.send('mimacuowu');
        }

    });
};

exports.logout = function (req, res) {
    client.del(req.sessionID, function() {
        console.log('session del done!');
        res.json({"sessionDel":"1"});
    });
};

exports.checkUserExist = function (req, res) {
    var username = req.body.username;
    var sql = 'select * from wb_user where username='+conn.escape(username);
    conn.query(sql, function(err, rows, fields) {
        if (err) throw err;

        console.log(sql);
        console.log(rows);
        if(rows.length){
            res.json({"isUnique":false});
        }else{
            res.json({"isUnique":true});
        }
        // res.send('reg ok');
    });
};

exports.reg = function (req, res) {
    client.on("error", function (err) {
        console.log("Error " + err);
    });

    var username = req.body.regData.username;
    var email = req.body.regData.email;
    var md5 = crypto.createHash('md5');
    var password = md5.update(req.body.regData.password).digest('hex');
    var sql = 'insert into wb_user(username,password,email) values('+conn.escape(username)+','+conn.escape(password)+','+conn.escape(email)+')';

    conn.query(sql, function(err, rows, fields) {
        if (err) throw err;

        console.log(sql);
        res.send('reg ok');
    });
};