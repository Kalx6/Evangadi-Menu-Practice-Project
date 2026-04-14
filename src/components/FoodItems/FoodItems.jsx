import React, { Component } from "react";
import Card from "../Card.jsx/Card";
import Header from "../Header/Header";
import styles from "./foodItems.module.css";

export default class FoodItems extends Component {
  render() {
    return (
      <div className={styles["all-container"]}>
        <Header />
        <div className={styles["foods-container"]}>
          <Card />
        </div>
      </div>
    );
  }
}
