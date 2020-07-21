import React , {Component} from 'react';
import {Tab, Container, Row, Col, Nav } from "react-bootstrap";

export default class About extends Component {
    render() {
        return(
           <Container>
               <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                   <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Design</Nav.Link>
                                </Nav.Item>    
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Team</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Programing</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">Libraries</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className="mt-3 mb-3" >
                                <Tab.Pane eventKey="first">
                                    <img 
                                        style={{width:"90%" , height: "auto"}}
                                        src="https://images.pexels.com/photos/4219149/pexels-photo-4219149.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                        alt="Design"
                                    />
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <img 
                                        style={{width:"90%" , height: "auto"}}
                                        src="https://www.pressgazette.co.uk/wp-content/uploads/2019/02/Economist-Radio-team-e1549041111694-800x600.jpg"
                                        alt="Team"
                                    />
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <img 
                                        style={{width:"90%" , height: "auto"}}
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQNykXJmRy2EvoRJoYG3e-IA0OieNA0jx93aw&usqp=CAU"
                                        alt="Programing"
                                    />
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <img 
                                        style={{width:"90%" , height: "auto"}}
                                        src="https://nextbigtechnology.com/wp-content/uploads/2019/11/Will-JavaScript.jpg"
                                        alt="Frameworks"
                                    />
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    <img 
                                        style={{width:"90%" , height: "auto"}}
                                        src="https://res.cloudinary.com/practicaldev/image/fetch/s--EkOWQT5j--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://raw.githubusercontent.com/marioarranzr/dev.to/master/blog-posts/react-bootstrap/assets/react-bootstrap.png"
                                        alt="Libs"
                                    />
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                   </Row>
               </Tab.Container>
           </Container>
        )
    }
}