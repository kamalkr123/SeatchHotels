import React from "react";
import { Container, Header, RowItem } from "./SearchContent.styles";
import { LocationType } from "../../types/LocationTypes";
import { HotelSearchListType } from "../../types/HotelTypes";
import Loading from "../shared/Loading/Loading";
import { useNavigate } from "react-router-dom";
const LOCATION_ICON =
  "https://www.freeiconspng.com/uploads/address-location-marker-pin-place-point-pointer-icon--icon--0.png";

const HOTEL_ICON =
  "https://icones.pro/wp-content/uploads/2022/03/icone-de-construction-et-de-batiment-gris.png";

type SearchContentPropTypes = {
  heading: string;
  id: "locations" | "hotels";
  loading?: boolean;
  results: [LocationType] | [HotelSearchListType];
};

function RowContent({ item, id }: { item: any; id: "locations" | "hotels" }) {
  let { mainText, subText } = item;
  const navigate = useNavigate();

  if (id === "hotels") {
    mainText = item?.shortName;
    subText = item?.hotelAddress?.city;
  }
  if (mainText.length > 30) {
    mainText = mainText.slice(0, 30) + "...";
  }

  const handleItemClick = () => {
    if (id === "locations") {
      navigate(`/place/${mainText}`);
    } else {
      if (id === "hotels") {
        navigate(`/hotel/${mainText}`);
      }
    }
  };

  return (
    <RowItem onClick={handleItemClick} key={mainText + subText}>
      <img
        src={id === "locations" ? LOCATION_ICON : HOTEL_ICON}
        width="18"
        alt="location-icon"
      />
      {mainText}
      <span>{subText}</span>
    </RowItem>
  );
}

function SearchContent({
  heading,
  results,
  id,
  loading,
}: SearchContentPropTypes) {
  return loading ? (
    <Loading />
  ) : (
    <Container>
      <Header>{heading}</Header>
      {results &&
        results
          .slice(0, 3)
          .map((result: LocationType | HotelSearchListType) => (
            <RowContent item={result} id={id} />
          ))}
    </Container>
  );
}

export default SearchContent;
