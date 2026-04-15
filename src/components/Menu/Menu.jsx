import React, { Component } from "react";
import Header from "../Header/Header";
import styles from "./menu.module.css";
import FoodItem from "../FoodItem/FoodItem";

export default class FoodItems extends Component {
  render() {
    return (
      <div className={styles["all-container"]}>
        <Header />
        <div className={styles["foods-container"]}>
          <FoodItem />
        </div>
      </div>
    );
  }
}
