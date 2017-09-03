import PageContent from "./components/PageContent";
import PageFooter from "./components/PageFooter";
import PageHeader from "./components/PageHeader";
import React, { Component } from "react";
import "./App.css";
import "./AppMobile.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <PageHeader />
                <PageContent />
                <PageFooter />
            </div>
        );
    }
}

export default App;
