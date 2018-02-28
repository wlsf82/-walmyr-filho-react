import React, { PureComponent } from "react";

class GoToTopButton extends PureComponent {
    render() {
        return (
            <a
                id="go-to-top"
                href="#top"
                rel="noopener noreferrer"
                target="_self"
                title="Vai pro topo"
            >
                    Topo ^
            </a>
        );
    }
}

export default GoToTopButton;
