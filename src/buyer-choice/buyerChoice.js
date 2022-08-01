"use strict";

const calc = require("./calc.json");
const meta = require("./meta.json");
const notes = require("./notes.json");
const cover = require("./coverpage.json");
const closing = require("./closing.json");

module.exports.endpoint = (event, context, callback) => {
  if (event.body) {
    event = JSON.parse(event.body);
  }

  
  const headers = {
    'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    'Access-Control-Allow-Credentials': true, // Required for cookies, authorization headers with HTTPS
  };

  const response = {
    headers,
    statusCode: 200,
    body: JSON.stringify({
      meta: meta,
      conventional : {
        converPage: cover,
        aCalc: calc,
        aClose: closing,
        aNotes: notes,
        bCalc: calc,
        bClose: closing,
        bNotes: notes,
      },
      fha: {
        coverPage: cover,
      }
    }),
  };
  callback(null, response);
};
