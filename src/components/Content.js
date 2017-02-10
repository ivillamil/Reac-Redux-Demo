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
        display: "flex",
        flex: 1,
        flexDirection: "column",
        overflow: "hidden"
    }
};

export default Content;
