require("dotenv").config();
const fetch = require("node-fetch");

exports.handler = async function (event) {
  const input = event.queryStringParameters.input;
  const apiUrl = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&key=${process.env.GOOGLE_PLACES_KEY}`;

  const response = await fetch(apiUrl);
  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "text/plain",
    },
  };
};
