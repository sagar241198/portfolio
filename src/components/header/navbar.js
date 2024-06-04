import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { HeaderConatainer, IconDiv } from './styled';
import FavoriteIcon from '@mui/icons-material/Favorite';

function MainHeader() {
    return (
        <HeaderConatainer>
            <Navbar expand="lg">
                <Container fluid>
                    <div><h4 style={{ color: '#ffff' }}>Portfolio</h4></div>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0"> </Nav>
                        <IconDiv> <FavoriteIcon /></IconDiv>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </HeaderConatainer>
    );
}

export default MainHeader;