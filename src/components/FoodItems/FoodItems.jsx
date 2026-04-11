import React, { Component } from "react";
import Card from "../Card.jsx/Card";
import "./foodItems.css";

export default class FoodItems extends Component {
  render() {
    return (
      <div className="all-container">
        {/* header start  */}
        <header className="title">
          <h1>Evangadi Menu</h1>
          <div />
        </header>
        {/* header end  */}
        {/* all food items container start */}
        <div className="foods-container">
          <Card />
        </div>
        {/* all food items container start */}
      </div>
    );
  }
}
