import React from "react";
import ReactDOM  from "react-dom/client";
import logo from "./img/logo.jpg"
import 'bootstrap/dist/css/bootstrap.css';

const Header =() => {
    return (
        <div className="headersec">
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-md-3">
                        <div className="logo">
                            <img src={logo} alt="logo" />
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="navitem">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
const Body =() =>{
    return (
        <div className="mainsec">
            <div className="container">
                <div className="searchbox">Search</div>
            </div>
            <div className="cardsec">
                <div className="container">
                    <div className="cardbox">
                        <h1>Card</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

const AppComponent = () =>{
return (
    <div className="app">
        <Header />
        <div className="bodywarpper">
          <Body />
        </div>
    </div>
);
};
const container = ReactDOM.createRoot(document.getElementById("root"));
container.render(<AppComponent/>);
