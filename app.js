import React from "react";
import ReactDOM  from "react-dom/client";
import logo from "./img/logo.png"
import Cardimg1 from "./img/card1.jpg"
import Cardimg2 from "./img/cardimg2.jpg"

import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";


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

const ResCard = (props) =>{
    return(
        <div class="col-md-3">
            <div className="cardbox mt-5">
                <div className="cardimg">
                    <img src={Cardimg1} alt="logo" />
                </div>
                <div className="cardcontent">
                <h3 className="mt-3 mb-3">{props.resName}</h3>
                <h5><i class="bi bi-star"></i> 4.5 <span className="dot-divider"></span> 30-35mins</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit?</p>
                </div>
            </div>
        </div>
    )
}
const Body =() =>{
    return (
        <div className="mainsec">
            <div className="container">
                <div className="searchbox">Search</div>
            </div>
            <div className="cardsec">
                <div className="container">
                    <div class="row">
                        <ResCard resName="Punjab Gharana" resImg="" resRating=""/>
                        <ResCard resName="KFC" resImg="" resRating=""/>
                        <ResCard resName="Dominos" resImg="" resRating=""/>
                        <ResCard resName="Momo Plaza" resImg="" resRating=""/>
                        <ResCard resName="Hatari" resImg="" resRating=""/>
                        <ResCard resName="Tandoor House" resImg="" resRating=""/>
                        <ResCard resName="Hanglatherium" resImg="" resRating=""/>
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
