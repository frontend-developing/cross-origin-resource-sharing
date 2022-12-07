import React from 'react';
import {RespContext} from "../../context";

import './index.css';

// Nav component.
class Nav extends React.Component {
    constructor(props) {
        super(props);

        // nav states
        this.state = {
            status: "None"
        }
    }

    render() {
        return (
            <div className={"nav"}>
                <h4>
                    <a
                        rel={"noreferrer"}
                        href={"https://www.github.com"}
                        target={"_blank"}
                    >
                        <img
                            src={"https://cdn-icons-png.flaticon.com/512/25/25231.png"}
                            width={"50px"}
                            alt={"github logo"}
                        />
                    </a>
                </h4>
                <h4>
                    <RespContext.Provider value={this.state.status}>
                        {this.state.status}
                    </RespContext.Provider>
                </h4>
            </div>
        )
    }
}

export default Nav;