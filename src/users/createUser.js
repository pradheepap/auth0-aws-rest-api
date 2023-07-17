"use strict";

module.exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "User Created Successfully",
        input: event,
      },
      null,
      2
    ),
  };
};