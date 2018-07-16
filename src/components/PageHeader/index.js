import React, { PureComponent } from "react";

class PageHeader extends PureComponent {
    render() {
        return (
            <header className="large">
                <div className="container">
                    <h1>
                        <a href="#top">Walmyr <span>Lima e Silva </span>Filho</a>
                    </h1>
                </div>
            </header>
        );
    }
}

export default PageHeader;
