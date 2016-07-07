import React, { Component, PropTypes } from "react";
import Radium from "radium";

@Radium
class Icon extends Component {
    render() {
        const iconClass = `fa fa-${this.props.icon}`;
        return (
            <span class={iconClass} style={[styles.icon, this.props.style]} />
        );
    }
}

Icon.propTypes = {
    icon: PropTypes.string.isRequired,
    style: PropTypes.object
};

const styles = {
    icon: {
        color: 'white',
        fontSize: 20,
        marginBottom: 10
    }
};

export default Icon;
