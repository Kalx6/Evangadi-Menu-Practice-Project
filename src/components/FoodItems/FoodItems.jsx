import React, { Component } from "react";
import Card from "../Card.jsx/Card";
import Header from "../Header/Header";
import "./foodItems.css";

export default class FoodItems extends Component {
  render() {
    return (
      <div className="all-container">
        <Header />
        <div className="foods-container">
          <Card />
        </div>
      </div>
    );
  }
}
