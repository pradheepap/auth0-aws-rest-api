"use strict";

module.exports.handler = async (event) => {
    console.log(`Event - ${JSON.stringify(event)}`)
    return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Get User",
      },
      null,
      2
    ),
  };
};