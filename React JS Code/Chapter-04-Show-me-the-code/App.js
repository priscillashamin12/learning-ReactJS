import React from "react";
import ReactDOM from "react-dom/client";
import { createElement } from "react";

const Title = () => (

    <a href="/">
    <img className="logo" src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"/>
        </a>)
{/* <h1 id="title" key="h2">
    Food Villa
    </h1> */}


    //config driven UI

    const config = [
{
    type: "carousel",
    cards: [
        {
            offerName: "50% offer"
        },
        {
            offerName: "No delivery service"
        },
    ]
},
{
    type: "type",
    cards: [
        {
            name: "Burger King",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hamburger_%28black_bg%29.jpg/640px-Hamburger_%28black_bg%29.jpg",
            cusines: ["Burger", "American"],
            rating:"4.2"
        },
        {
            name: "Burger King",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hamburger_%28black_bg%29.jpg/640px-Hamburger_%28black_bg%29.jpg",
            cusines: ["Burger", "American"],
            rating:"4.2"
        },
    ]
}

    ]
    

const HeaderComponent = () => {
    return (
        <div className="header">
            <Title/>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
                </div>
        </div>
    );
}

const burgerKing = [{
    name: "Burger King",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hamburger_%28black_bg%29.jpg/640px-Hamburger_%28black_bg%29.jpg",
    cusines: ["Burger", "American"],
    rating:"4.2"
},{
    name: " KFC",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hamburger_%28black_bg%29.jpg/640px-Hamburger_%28black_bg%29.jpg",
    cusines: ["Burger", "American"],
    rating:"4.2"
},{
    name: "Candy Bar",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hamburger_%28black_bg%29.jpg/640px-Hamburger_%28black_bg%29.jpg",
    cusines: ["Burger", "American"],
    rating:"4.2"
}

]

const RestrauntCard = (props) => {
    // {name, }
    console.log("props: " + props.burgerKing)
    return (
        <div className="card">
<img src={props.burgerKing.image}/>
<h2>{props.burgerKing.name}</h2>
<h3>{props.burgerKing.cusines.join(", ")}</h3>
<h4>{props.burgerKing.rating} stars</h4>
            </div>
    )
}

const Footer = () => {
    return (
        <h4>Footer</h4>
    )
}

const Body = () => {
    return (
        <div className="rest-list">
            {/* {
                burgerKing.map((burger) => {
                    return <RestrauntCard {...burger.data}/>
                })
            } */}
        <RestrauntCard burgerKing={burgerKing[0]}/>
        <RestrauntCard burgerKing={burgerKing[1]}/>
        <RestrauntCard burgerKing={burgerKing[2]}/>
        </div>
    )
}



const AppLayout = () =>  {
    return (
        <React.Fragment>
<HeaderComponent/>
<Body/>
<Footer/>
</React.Fragment>
    );
};
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout/>)