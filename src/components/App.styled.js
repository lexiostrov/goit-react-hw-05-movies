import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 2px solid gray;

  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: 400;

  &.active {
    color: green;
  }
`;
