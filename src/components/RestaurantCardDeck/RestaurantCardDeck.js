import React, {Component} from 'react';
import {CardDeck} from "react-bootstrap";
import RestaurantCard from "../RestaurantCard/RestaurantCard";

class RestaurantCardDeck extends Component {

    render() {
        return (
            <CardDeck>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
            </CardDeck>
        );
    }
}

export default RestaurantCardDeck;