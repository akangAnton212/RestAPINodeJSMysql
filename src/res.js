'use strict';

exports.ok = function(values, res) {
  var data = {
      'ok': true,
      'message': values
  };
  res.json(data);
  res.end();
};