import React from 'react';
import { TextInput } from 'react-native';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textInputStyle: 0,
        };
    };

    setPadding = () => {
        this.setState({
            textInputStyle: 40,
        });
    };

    render() {
        return (
            <TextInput
                style={{borderWidth: 1, marginTop: 200, paddingLeft: this.state.textInputStyle}}
                onFocus={this.setPadding}
            />
        );
    };
}
