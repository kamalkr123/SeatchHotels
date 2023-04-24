class LocationApi {
  static async fetchLocations(val: string) {
    const response = await fetch(
      `/.netlify/functions/google-places-auto-complete?input=${val}`,
      {
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => res.json());

    return response?.predictions?.map((place: any) => ({
      mainText: place.structured_formatting.main_text,
      subText: place.structured_formatting.secondary_text,
    }));
  }
}

export default LocationApi;
