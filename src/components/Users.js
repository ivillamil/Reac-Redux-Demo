import React, { Component } from "react";
import Radium from "radium";
import { connect } from "react-redux";

@Radium
class Users extends Component {
    render() {
        return (
            <div style={styles.container}>
                <div style={styles.searchBar}>
                    <input style={styles.searchBarInput} type="search" placeholder="nombre a buscar" />
                </div>
                <ul style={styles.usersList}>
                    {this.props.users.map(this.renderUserItem.bind(this))}
                </ul>
            </div>
        );
    }

    renderUserItem(user, i) {
        return (
            <li key={user.id} style={styles.userItem}>
                <figure style={styles.userItemAvatar}>
                    <img src={user.avatar_src} />
                </figure>
                <div style={styles.userItemInfo}>
                    <h3 style={[styles.userInfoName, styles.noMargin]}>
                        {user.first_name} {user.last_name}
                    </h3>
                    <h6 style={[styles.userInfoEmail, styles.noMargin]}>
                        {user.email}
                    </h6>
                </div>
            </li>
        )
    }
}

const styles = {
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        overflowY: "hidden"
    },

    noMargin: {
        margin: 0
    },

    searchBar: {
        flex: 0,
        padding: 10
    },

    searchBarInput: {
        border: '1px solid #ccc',
        fontSize: 16,
        padding: 6,
        width: '100%'
    },

    userItem: {
        backgroundColor: 'white',
        cursor: 'pointer',
        display: 'flex',
        flex: 0,
        flexDirection: 'row',
        marginBottom: 2,
        minHeight: 60,
        padding: 10,
        transition: 'all 200ms ease-in',

        ':hover': {
            backgroundColor: '#efefef'
        }
    },

    userItemAvatar: {
        flex:0,
        margin: 10,
        width: 70
    },

    userInfoEmail: {
        color: '#666',
        fontSize: 12
    },

    userInfoName: {
        color: '#444',
        fontSize: 18
    },

    userItemInfo: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },

    usersList: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        listStyle: 'none',
        margin: 0,
        overflowY: 'scroll',
        padding: '0px 10px 10px 10px'
    }
};

function selectProps(state) {
    return {
        users: state.users
    }
}

Users = connect(selectProps)(Users);

export default Users;
