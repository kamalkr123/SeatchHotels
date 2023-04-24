import React, { useEffect } from "react";
import {
  HotelAddress,
  Container,
  Image,
  HotelName,
} from "./HotelDetails.styles";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleHotel } from "../../actions/HotelActions";
import {
  hotelDetailsSelector,
  hotelLoadingSelector,
} from "../../selectors/HotelSelector";
import Loading from "../../components/shared/Loading/Loading";

function SingleHotel() {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (params.hotelName) {
      dispatch(fetchSingleHotel(params?.hotelName));
    } else {
      navigate("/");
    }
  }, [dispatch, navigate, params.hotelName]);

  const hotelDetails = useSelector(hotelDetailsSelector);
  const isLodaing = useSelector(hotelLoadingSelector);
  return isLodaing ? (
    <Loading />
  ) : (
    <Container>
      <Image src={hotelDetails?.photo} />
      <HotelName>{hotelDetails?.name}</HotelName>
      <HotelAddress>{hotelDetails?.address}</HotelAddress>
    </Container>
  );
}

export default SingleHotel;
