import React, { Component } from "react";
import Radium from "radium";

@Radium
class Content extends Component {
    render() {
        return (<div style={styles.content}>{this.props.children}</div>);
    }
}

const styles = {
    content: {
        flex: 1,
        overflow: 'scroll'
    }
};

export default Content;
