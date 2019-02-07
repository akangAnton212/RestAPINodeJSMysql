'use strict';

var response = require('../res');
var connection = require('../../conn');

exports.users = function(req, res) {
    connection.query('SELECT * FROM test', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.getUsers = function(req, res) {
    connection.query('SELECT * FROM test where id = ?', [req.params.id] , function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.postUser = function(req, res) {
    connection.query('INSERT INTO test(nama,alamat,tlp) VALUES("'+ req.body.nama +'", "'+ req.body.alamat +'", "'+ req.body.tlp +'" )', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.updateUser = function(req, res) {
    let emp = req.body
    var sql = "UPDATE test SET nama = ? ,alamat = ? ,tlp = ? WHERE id = ?"
    connection.query(sql, [emp.nama, emp.alamat, emp.tlp, emp.id], function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.index = function(req, res) {
    response.ok("Hello from the Node JS RESTful side!", res)
};