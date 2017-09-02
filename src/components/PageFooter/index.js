import Social from "../Social";
import React, { PureComponent } from "react";

class PageFooter extends PureComponent {
    render() {
        return (
            <div className="App-footer">
                <h4>Entre em contato</h4>
                <a href="mailto: wlsf82@gmail.com?Subject=Olá">wlsf82@gmail.com</a>
                <Social />
            </div>
        );
    }
}

export default PageFooter;
