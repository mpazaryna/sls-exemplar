"use strict";
var lib = require("./lib/calculateLib");

module.exports.endpoint = (event, context, callback) => {
  if (event.body) {
    event = JSON.parse(event.body);
  }

  let foo = Number(event.sp);
  let x = lib.easyAdd(event.sp);

  const response = {
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
