import styled from "styled-components";

export const Container = styled.div`
  width: calc(100vw - 40px);
  margin: 50px auto;
`;

export const HotelsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const HotelCard = styled.div`
  height: 350px;
  width: 300px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  cursor: pointer;
`;

export const HotelImg = styled.img`
  width: 300px;
  height: 200px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  margin-bottom: 10px;
`;
export const HotelName = styled.div`
  font-size: 16px;
  padding: 20px;
  font-weight: 500;
`;
export const HotelDescription = styled.div`
  font-size: 12px;
  padding: 0 20px 20px;
`;
