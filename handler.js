"use strict";
var lib = require("./lib/calculateLib");

module.exports.endpoint = (event, context, callback) => {
  if (event.body) {
    event = JSON.parse(event.body);
  }

  let foo = Number(event.sp);
  let x = lib.easyAdd(event.sp);

  const headers = {
    'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    'Access-Control-Allow-Credentials': true, // Required for cookies, authorization headers with HTTPS
  };

  var meta = {
    version: "0.1.0",
    engine: "exemplar",
  };


  const response = {
    headers,
    statusCode: 200,
    body: JSON.stringify({
      calc: {
        sp: x,
        sq_foot: foo,
      },
    }),
  };
  callback(null, response);
};
