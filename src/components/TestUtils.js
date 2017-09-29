import React, { Component } from 'react';
import utils from '../utils'

class TestUtils extends Component {
    render() {
        let uuid = utils.generateUUID()
        return (
            <div>
                <br/>
                <div><b><u>Test utils Component</u></b></div>
                <br/>
                <div>UUID: {uuid}</div>
            </div>
        );
    }
}

export default TestUtils;