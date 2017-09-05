import React, { PureComponent } from "react";

class Button extends PureComponent {
    render() {
        const { href, target = "_self", children } = this.props;

        return (
            <a
                className="button"
                href={href}
                target={target}
                rel="noopener noreferrer"
            >
                    { children }
            </a>
        );
    }
}

export default Button;
