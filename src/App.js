import PageContent from "./components/PageContent";
import PageFooter from "./components/PageFooter";
import PageHeader from "./components/PageHeader";
import React, { Component } from "react";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div>
                <PageHeader />
                <PageContent />
                <PageFooter />
            </div>
        );
    }
}

export default App;
