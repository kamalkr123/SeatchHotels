import axios from "axios";

const options = {
  method: "GET",
  url: "https://hotels4.p.rapidapi.com/locations/v3/search",
  params: {
    q: "",
  },
  headers: {
    "X-RapidAPI-Key": "bc9a7514e4msh236bad69ca786d4p132674jsn4e158baf055d",
    "X-RapidAPI-Host": "hotels4.p.rapidapi.com",
  },
};

class HotelApi {
  static async fetchHotels(val: string) {
    options.params.q = val;
    const response = await axios.get(options.url, {
      params: options.params,
      headers: options.headers,
    });
    const hotels = response?.data?.sr?.filter(
      (item: any) => item.type === "HOTEL"
    );
    return hotels.map((hotel: any) => {
      return {
        hotelId: hotel.hotelId,
        fullName: hotel.regionNames.fullName,
        shortName: hotel.regionNames.shortName,
        hotelAddress: {
          street: hotel.hotelAddress.street,
          city: hotel.hotelAddress.city,
        },
      };
    });
  }

  static async fetchHotelsOfLocation(val: string) {
    return new Promise((resolve, reject) => {
      const service = new google.maps.places.PlacesService(
        document.createElement("div")
      );
      const request = {
        query: `Hotels in ${val}`,
        type: "lodging",
        fields: ["name", "formatted_address", "geometry"],
      };

      service.textSearch(request, (hotels: any) => {
        const result = hotels.map((hotel: any) => {
          return {
            name: hotel.name,
            place_id: hotel.place_id,
            photo: hotel?.photos[0]?.getUrl(),
            address: hotel.formatted_address,
          };
        });
        resolve(result);
      });
    });
  }

  static async fetchSingleHotel(val: string) {
    return new Promise((resolve, reject) => {
      const service = new google.maps.places.PlacesService(
        document.createElement("div")
      );
      const request = {
        query: val,
        type: "lodging",
        fields: ["name", "formatted_address", "geometry"],
      };

      service.textSearch(request, (hotels: any) => {
        const hotel = hotels[0];
        if (hotel) {
          const result = {
            name: hotel.name,
            place_id: hotel.place_id,
            photo: hotel?.photos[0]?.getUrl(),
            address: hotel.formatted_address,
          };
          resolve(result);
        } else {
          resolve(null);
        }
      });
    });
  }
}

export default HotelApi;
