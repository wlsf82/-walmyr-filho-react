import React, { PureComponent } from "react";

class ServiceDetails extends PureComponent {
    render() {
        const { children } = this.props;

        return (
            <div className="main-content">
                <h2>{children}</h2>
            </div>
        );
    }
}

export default ServiceDetails;
