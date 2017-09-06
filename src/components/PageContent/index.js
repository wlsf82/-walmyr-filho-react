import Blog from "../Blog";
import Book from "../Book";
import Courses from "../Courses";
import Introduction from "../Introduction";
import ServiceDetails from "../ServiceDetails";
import Services from "../Services";
import Speaches from "../Speaches";
import React, { PureComponent } from "react";

class PageContent extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            page: "home",
        }
    }

    render() {
        const { page } = this.state;

        return (
            page === "home" ?
            <div className="main-content">
                <Introduction />
                <Services />
                <Blog />
                <Courses />
                <Book />
                <Speaches />
            </div> :
            <div className="service-details">
                <ServiceDetails />
            </div>
        );
    }
}

export default PageContent;
