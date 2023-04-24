import styled, { keyframes } from "styled-components";

const slideDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-10px);
  } 
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;
export const Input = styled.input`
  width: 60%;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  background-color: white;
  background-image: url("https://www.freeiconspng.com/uploads/address-location-marker-pin-place-point-pointer-icon--icon--0.png");
  background-position: 10px 10px;
  background-repeat: no-repeat;
  padding-left: 40px;
  margin-top: 80px;
  background-size: 22px;
`;
export const DropdownContainer = styled.div`
  width: 60%;
  border: 1px solid #e2e2e2;
  margin-top: 2px;
  border-radius: 4px;
  animation: ${slideDown} 0.5s ease;
`;
