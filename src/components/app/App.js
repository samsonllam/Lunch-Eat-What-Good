import React, {Component} from 'react';
import './App.css';
import {Col, Container, Row} from "react-bootstrap";
import TimePicker from "../TimePicker/TimePicker";
import RestaurantCardDeck from "../RestaurantCardDeck/RestaurantCardDeck";
import PathUtil from "../../Util/PathUtil"


// TODO get location  info

class App extends Component{
    state = {
        walkTime: 5,
        radius: 416,
        location: "22.348240,114.200554",
    }

    constructor(props){
        super(props);
        this.onWalkTimePickChange = this.onWalkTimePickChange.bind(this);
    }

    onWalkTimePickChange(newWalkTime){
        this.setState({walkTime: parseInt(newWalkTime)});
        this.searchRestaurant();
    }

    searchRestaurant(){
        fetch(PathUtil.getApiURL +
                "json?location=" + this.state.location +
                "&radius=" + this.state.radius +
                "&types=Restaurants" +
                "&key=" + PathUtil.getApiKey)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                },
                (error) => {
                    console.log(error);
                }
            )
    }

    render(){
        return (
            <div className="App">
                <header className="App-header">
                    <Container>
                        <Row className="justify-content-md-center" style={{ height: '20vh' }}>
                            <Col xs={12} md={6}>
                                <TimePicker onChange={this.onWalkTimePickChange}></TimePicker>
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center">
                            <RestaurantCardDeck/>
                        </Row>
                    </Container>
                </header>
            </div>
        );
    }
}

export default App;
