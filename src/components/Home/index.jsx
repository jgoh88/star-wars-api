import { Col, Container, Row, Card } from "react-bootstrap";
import siteResources from "../../configs/siteResourceConfig";
import { LinkContainer } from "react-router-bootstrap";

export default function Home() {
    return (
        <Container>
            <Row className="mt-3 text-center">
                <Col>
                    <h1>Explore the Star Wars universe</h1>
                </Col>
            </Row>
            <Row>
                {Object.keys(siteResources).map(resource =>
                    <LinkContainer key={resource} to={`/${resource}`}>
                        <Col xs={12} md={6} lg={4} className="mt-3">
                            <Card 
                                style={{height: 'min-content', minHeight: '20vh', cursor: "pointer"}} 
                                bg={"dark"} 
                                variant={'dark'} 
                            >
                                <Card.Body>
                                    <Card.Title className="text-white">{siteResources[resource].navTitle}</Card.Title>
                                    <Card.Text className="text-white mt-3">{siteResources[resource].description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </LinkContainer>
                )}
            </Row>
        </Container>
    )
}