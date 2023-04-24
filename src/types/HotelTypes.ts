export type HotelSearchListType = {
  hotelId: string;
  fullName: string;
  shortName: string;
  hotelAddress: {
    street: string;
    city: string;
  };
};
export type HotelType = {
  name: string;
  place_id: string;
  photo: string;
  address: string;
};
