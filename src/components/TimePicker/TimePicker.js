import React, {Component} from 'react';
import {Form} from "react-bootstrap";

class TimePicker extends Component {
    state = {
        walkTime: -1
    }

    render() {
        return (
            <div>
                <Form.Group controlId="formGridState">
                    <Form.Label>Minute to walk to</Form.Label>
                    <Form.Control as="select"
                        onChange={(e) => this.props.onChange(e.target.value)}>
                        <option value="5">5 min</option>
                        <option value="10">10 min</option>
                        <option value="15">15 min</option>
                    </Form.Control>
                </Form.Group>
            </div>
        );
    }
}

export default TimePicker;