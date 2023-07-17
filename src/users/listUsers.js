"use strict";

module.exports.handler = async (event) => {
  console.log(`Event - ${event}`)
    return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "List Users",
        input: event,
      },
      null,
      2
    ),
  };
};