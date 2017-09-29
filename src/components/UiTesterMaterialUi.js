import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

class UiTesterMaterialUi extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <p/>
                    <div>  UiTester Material-ui Component </div>
                    <div>
                        <RaisedButton label="A material-ui Raised Button" />
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default UiTesterMaterialUi;