import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;
export const Header = styled.div`
  height: 20px;
  padding: 8px 16px;
  background-color: #f7f7f7;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  border-bottom: 1px solid #e2e2e2;
`;
export const RowItem = styled(Header)`
  background-color: #fff;
  font-weight: normal;
  font-size: 15px;
  display: flex;
  align-items: center;
  cursor: pointer;
  :hover {
    background-color: #fafafa;
  }
  img {
    margin-right: 4px;
  }
  span {
    font-size: 14px;
    color: #b3adb0;
    margin-left: 6px;
  }
`;
