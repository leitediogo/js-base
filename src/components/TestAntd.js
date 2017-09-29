import React, { Component } from 'react';
import { Button } from 'antd'
class TestAntd extends Component {
    render() {
        return (
            <div>
                <p/>
                <div><b><u>Test antd component</u></b></div>
                <br/>
                <div><Button type="primary"> Antd Button </Button></div>
            </div>
        );
    }
}

export default TestAntd;