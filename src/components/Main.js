import React, { Component } from "react";

import Content from "./Content";
import Sidebar from "./Sidebar";
import Wrapper from "./Wrapper";

class Main extends Component {
    render() {
        return (
            <Wrapper>
                <Sidebar />
                <Content>
                    {React.cloneElement(this.props.children, this.props)}
                </Content>
            </Wrapper>
        );
    }
}

export default Main;
