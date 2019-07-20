import React, {Component} from 'react';
import './App.css';
import {Col, Container, Row} from "react-bootstrap";
import TimePicker from "../TimePicker/TimePicker";
import RestaurantCard from "../RestaurantCard/RestaurantCard";

// TODO get location  info

class App extends Component{
    state = {
        walkTime: 5,
    }

    constructor(props){
        super(props);
        this.onWalkTimePickChange = this.onWalkTimePickChange.bind(this);
    }

    onWalkTimePickChange(newWalkTime){
        this.setState({walkTime: parseInt(newWalkTime)});
    }

    render(){
        return (
            <div className="App">
                <header className="App-header">
                    <Container>
                        <Row style={{ height: '20vh' }}>
                            <Col xs={12} md={6}>
                                <TimePicker onChange={this.onWalkTimePickChange}></TimePicker>
                            </Col>
                            <Col xs={12} md={6}>
                                Cuisine / Place
                            {/*    TODO  show location*/}
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center">
                            <RestaurantCard/>
                        </Row>
                    </Container>
                </header>
            </div>
        );
    }
}

export default App;
