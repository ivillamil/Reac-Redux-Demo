import React, { Component } from "react";
import Radium from "radium";

@Radium
class Wrapper extends Component {
    render() {
        return (
            <div style={styles.app}>{this.props.children}</div>
        );
    }
}

const styles = {
    app: {
        alignItems: 'stretch',
        backgroundColor: '#efefef',
        bottom: 0,
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        fontFamily: 'sans-serif',
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0
    },
};

export default Wrapper;
