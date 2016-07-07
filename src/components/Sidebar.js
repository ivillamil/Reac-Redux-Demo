import React, { Component } from "react";
import Radium from "radium";

import Menu from "./Menu";

@Radium
class Sidebar extends Component {
    render() {
        return(
            <div style={styles.sidebar}>
                <Menu />
            </div>
        );
    }
}

const styles = {
    sidebar: {
        backgroundColor: '#F44336',
        display: 'flex',
        color: '#fff',
        flex: 0,
        minWidth: 200
    }
};

export default Sidebar;
