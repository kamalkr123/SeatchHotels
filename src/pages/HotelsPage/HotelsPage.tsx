import React, { useEffect } from "react";
import {
  Container,
  HotelCard,
  HotelImg,
  HotelName,
  HotelDescription,
  HotelsContainer,
} from "./HotelsPage.styles";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchHotelsOfLocation } from "../../actions/HotelActions";
import {
  hotelLoadingSelector,
  hotelsSelector,
} from "../../selectors/HotelSelector";
import { HotelType } from "../../types/HotelTypes";
import Loading from "../../components/shared/Loading/Loading";

function HotelsPage() {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const hotelsList = useSelector(hotelsSelector);
  const isLoading = useSelector(hotelLoadingSelector);

  const handleHotelClick = (hotel: HotelType) => {
    navigate(`/hotel/${hotel.name}`);
  };

  useEffect(() => {
    if (params.place) {
      dispatch(fetchHotelsOfLocation(params.place));
    }
  }, [dispatch, params.place]);

  return isLoading ? (
    <Loading />
  ) : (
    <Container>
      <HotelsContainer>
        {hotelsList?.map((hotel: HotelType) => (
          <HotelCard
            key={hotel.place_id}
            onClick={() => handleHotelClick(hotel)}
          >
            <HotelImg src={hotel.photo} />
            <HotelName>{hotel.name}</HotelName>
            <HotelDescription>{hotel.address}</HotelDescription>
          </HotelCard>
        ))}
      </HotelsContainer>
    </Container>
  );
}

export default HotelsPage;
