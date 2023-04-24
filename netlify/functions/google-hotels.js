require("dotenv").config();
const fetch = require("node-fetch");

exports.handler = async function (event) {
  const input = event.queryStringParameters.input;
  const apiUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${input}&key=${process.env.GOOGLE_PLACES_KEY}`;

  const response = await fetch(apiUrl);
  const data = await response.json();
  const result = data?.results?.map((hotel) => {
    return {
      name: hotel.name,
      place_id: hotel.place_id,
      photo: hotel?.photos[0]?.getUrl(),
      address: hotel.formatted_address,
    };
  });

  return {
    statusCode: 200,
    body: JSON.stringify(result),
  };
};
