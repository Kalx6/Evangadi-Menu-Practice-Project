import React, { Component } from "react";
import styles from "./Card.module.css";

export default class Card extends Component {
  render() {
    const { id, img, title, price, desc, link } = this.props;
    console.log(link);
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
          <div className={styles["food-desc"]}>
            {/* {desc} */}
            {desc.length > 250 ? `${desc.slice(0, 250)}...` : desc}
          </div>
          <div className={styles["title-price"]}>
            {link && <a href="#">{link}</a>}
          </div>
        </div>
      </>
    );
  }
}
