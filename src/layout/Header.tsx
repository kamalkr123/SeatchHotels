import React from "react";
import {
  Container,
  CreatorName,
  LogoContainer,
  ProjectName,
} from "./Header.styles";
import { Outlet, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <LogoContainer onClick={() => navigate("/")}>
          <ProjectName>HotelSearch</ProjectName>
          <CreatorName>by Kamal Kumar</CreatorName>
        </LogoContainer>
      </Container>
      <Outlet />
    </>
  );
}

export default Header;
