import { Container, Navbar, Nav } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import siteResources from "../../configs/siteResourceConfig"

export default function NavBar() {
    return (
        <Navbar expand="lg" bg={"dark"} variant={'dark'}>
            <Container>
                <LinkContainer to='/'>
                    <Navbar.Brand className="fw-medium">SW API</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to='/'>
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        {Object.keys(siteResources).map(resource =>
                            <LinkContainer key={resource} to={`/${resource}`}>
                                <Nav.Link>{siteResources[resource].navTitle}</Nav.Link>
                            </LinkContainer>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}