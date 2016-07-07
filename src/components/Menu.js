import React, { Component } from "react";
import Radium from "radium";
import { Link } from "react-router";

import Icon from "../common/Icon";

@Radium
class Menu extends Component {
    render() {
        return (
            <ul style={styles.menu}>
                <li style={styles.menuItem}>
                    <Link to="/" style={styles.menuItemLink}>
                        <Icon icon="users" style={styles.menuItemIcon} />
                        Usuarios
                    </Link>
                </li>
                <li style={[styles.menuItem, styles.menuItemLast]}>
                    <Link to="/themes" style={styles.menuItemLink}>
                    <Icon icon="paint-brush" style={styles.menuItemIcon} />
                        Temas
                    </Link>
                </li>
            </ul>
        );
    }
}

const styles = {
    menu: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        listStyle: 'none',
        padding: 0
    },

    menuItem: {
        display: 'flex',
        flex: 1
    },

    menuItemIcon: {
        fontSize: 60
    },

    menuItemLast: {
        borderTop: '1px solid rgba(255,255,255,0.2)'
    },

    menuItemLink: {
        alignItems: 'center',
        color: 'white',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        fontWeight: 300,
        textDecoration: 'none',
        justifyContent: 'center'
    }
};

export default Menu;
