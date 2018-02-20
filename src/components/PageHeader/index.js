import React, { PureComponent } from "react";

class PageHeader extends PureComponent {
    render() {
        return (
            <header class="large">
                <div className="container">
                    <h1>
                        <a href="#">Walmyr <span>Lima e Silva </span>Filho</a>
                    </h1>
                </div>
            </header>
        );
    }
}

export default PageHeader;
