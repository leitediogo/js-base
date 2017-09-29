import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

class TestMaterialUI extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <p/>
                    <div><b><u>Test material-ui component</u></b></div>
                    <br/>
                    <div>
                        <RaisedButton label="A material-ui Raised Button" />
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default TestMaterialUI;