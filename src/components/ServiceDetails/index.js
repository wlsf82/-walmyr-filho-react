import React, { PureComponent } from "react";

class ServiceDetails extends PureComponent {
    render() {
        const { children } = this.props;

        return (
            <div className="main-content">
                <h2>{children}</h2>
                {(() => {
                    switch (children) {
                        case "foo":
                            return <p>foobarbaz</p>;
                        case "bar":
                            return <p>barbazfoo</p>;
                        case "baz":
                            return <p>bazfoobar</p>;
                        default:
                            return null;
                    }
                })()}
            </div>
        );
    }
}

export default ServiceDetails;
