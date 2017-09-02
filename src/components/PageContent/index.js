import Blog from "../Blog";
import Book from "../Book";
import Courses from "../Courses";
import Introduction from "../Introduction";
import Services from "../Services";
import Speaches from "../Speaches";
import React, { PureComponent } from "react";

class PageContent extends PureComponent {
    render() {
        return (
            <div className="App-presentation">
                <Introduction />
                <Services />
                <Blog />
                <Courses />
                <Book />
                <Speaches />
            </div>
        );
    }
}

export default PageContent;
