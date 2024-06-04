import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { MemuHeader, NavItem, NavLink, SubMenu } from './styled';
import React from 'react';

function ManuHeader() {

    const [isScrolledUp, setIsScrolledUp] = React.useState(false);
    let lastScrollTop = 0;

    const handleScroll = () => {
        const st = window.pageYOffset || document.documentElement.scrollTop;
        if (st < lastScrollTop) {
            // Scroll up
            setIsScrolledUp(true);
        } else {
            // Scroll down
            setIsScrolledUp(false);
        }
        lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    };

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <SubMenu isScrolledUp={isScrolledUp}>
            <MemuHeader>
                <Navbar expand="lg">
                    <Container fluid>
                        <div><h4 style={{ color: '#ffff' }}> Welcome To My Portfolio</h4></div>
                        <Navbar.Collapse id="navbarScroll">
                            <Nav className="me-auto my-2 my-lg-0"> </Nav>
                            <Nav className="justify-content-center" activeKey="/home">
                                <NavItem>
                                    <NavLink href="/home">Home</NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink href="/home">About</NavLink>
                                </NavItem>

                                 <NavItem>
                                    <NavLink href="/home">Services</NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink href="/home">Skills</NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink href="/home">Contact</NavLink>
                                </NavItem>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </MemuHeader>
        </SubMenu>
    );
}

export default ManuHeader;