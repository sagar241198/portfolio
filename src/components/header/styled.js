import { Nav } from "react-bootstrap";
import styled from "styled-components";


export const HeaderConatainer = styled.div`
    background: hsl( 0deg 0% 0.39% );
    height: 4rem;
    position: fixed;
    width: 100%;
    z-index: 10;
}
`;

export const MemuHeader = styled.div`
    width: 80%;
    margin: 0 auto;
    position: sticky;
    top: 100px;
`;

export const NavItem = styled(Nav.Item)`
color: white;
`;

export const NavLink = styled(Nav.Link)`
color: white !important;
`

export const SubMenu = styled.div`
  background: ${({ isScrolledUp }) => (!isScrolledUp ? 'rgb(121, 82, 179)' : 'transparent')} !important;
  width: 100%;
  height: auto;
  position: fixed;
  top: 63px;
  z-index: 10;
  transition: background 0.3s ease;

`;

export const IconDiv = styled.div`
background: lightgray;
border-radius: 5px;
padding: 1px;
`;