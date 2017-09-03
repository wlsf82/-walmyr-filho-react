import React, { PureComponent } from "react";

class Button extends PureComponent {
    render() {
        const { children } = this.props;

        return (
            <button>
                { children }
            </button>
        );
    }
}

export default Button;
