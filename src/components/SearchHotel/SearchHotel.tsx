import { useDispatch, useSelector } from "react-redux";
import {
  DropdownContainer,
  Input,
  SearchContainer,
} from "./SearchHotel.styles";
import SearchContent from "../SearchContent/SearchContent";
import { clearPlaces, fetchLocations } from "../../actions/LocationActions";
import { locationResultsSelector } from "../../selectors/LocationSelector";
import { clearHotels, fetchHotels } from "../../actions/HotelActions";
import {
  hotelLoadingSelector,
  hotelResultsSelector,
} from "../../selectors/HotelSelector";
import { useCallback, useEffect } from "react";

function SearchHotel() {
  const locationSearchResults = useSelector(locationResultsSelector);

  const hotelSearchResults = useSelector(hotelResultsSelector);
  const isHotelLoading = useSelector(hotelLoadingSelector);

  const dispatch = useDispatch();

  const inputChangeHandler = (event: any) => {
    if (!event.target.value) {
      handleClearResults();
    }
    dispatch(fetchLocations(event.target.value));
    dispatch(fetchHotels(event.target.value));
  };
  const handleClearResults = useCallback(() => {
    dispatch(clearPlaces());
    dispatch(clearHotels());
  }, [dispatch]);

  useEffect(() => {
    handleClearResults();
  }, [handleClearResults]);

  return (
    <SearchContainer>
      <Input
        onChange={inputChangeHandler}
        onFocus={inputChangeHandler}
        placeholder="Search any place or hotel..."
      />
      {(!!hotelSearchResults?.length || !!locationSearchResults?.length) && (
        <DropdownContainer>
          {locationSearchResults && (
            <SearchContent
              id="locations"
              heading="Locations"
              results={locationSearchResults}
            />
          )}
          {hotelSearchResults && (
            <SearchContent
              id="hotels"
              heading="Hotels"
              results={hotelSearchResults}
              loading={isHotelLoading}
            />
          )}
        </DropdownContainer>
      )}
    </SearchContainer>
  );
}

export default SearchHotel;
