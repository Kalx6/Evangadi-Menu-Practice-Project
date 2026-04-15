import React, { Component } from "react";
import menu from "../../assets/data";
import styles from "./Card.module.css";

export default class Card extends Component {
  render() {
    const { id, img, title, price, desc } = this.props;
    return (
      <>
        <div key={id} className={styles["single-food"]}>
          <div className="img">
            <img src={img} />
          </div>
          <div className={styles["title-price"]}>
            <h3>{title}</h3>
            <p>{price}</p>
          </div>
          <div className={styles["food-desc"]}>{desc}</div>
        </div>
      </>
    );
  }
}
