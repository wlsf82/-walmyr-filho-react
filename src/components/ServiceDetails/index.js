import React, { PureComponent } from "react";

class ServiceDetails extends PureComponent {
    render() {
        const { children } = this.props;

        return (
            <div className="main-content">
                <h2>{children}</h2>
                {(() => {
                    switch (children) {
                        case "coaching":
                            return <p>foobarbaz</p>;
                        case "consultancy":
                            return <p>barbazfoo</p>;
                        case "development":
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
