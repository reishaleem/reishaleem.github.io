import React, { useState, useEffect } from "react";
import Carousel from "../atoms/Carousel/Carousel";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import image1 from "../../images/friend5.jpg";

export default () => {
    return (
        <>
            <Container style={{ height: "100vh" }}>
                <Row
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Card className="bg-dark text-white">
                        <Card.Img src={image1} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below
                                as a natural lead-in to additional content. This
                                content is a little bit longer.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </Row>
            </Container>
        </>
    );
};
