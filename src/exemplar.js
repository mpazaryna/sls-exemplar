"use strict";
var lib = require("../lib/calculateLib");

module.exports.endpoint = (event, context, callback) => {
  if (event.body) {
    event = JSON.parse(event.body);
  }

  let x = lib.easyAdd(event.sp);
  
  const headers = {
    'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    'Access-Control-Allow-Credentials': true, // Required for cookies, authorization headers with HTTPS
  };

  const meta = {
    engine: "exemplar",
    version: "1.0.0",
  }

  const response = {
    headers,
    statusCode: 200,
    body: JSON.stringify({
        meta: meta,
        sq_foot: x,
    }),
  };
  callback(null, response);
};
