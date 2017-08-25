## This project is to test bug of React Native

### Problem Description

I want to change padding of `TextInput` dynamically `onFocus`, the padding has changed, but the style of `TextInput` has not.

### Code

```
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
```
