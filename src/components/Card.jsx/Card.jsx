import React, { Component } from "react";
import menu from "../../assets/data";
import './Card.css'

export default class Card extends Component {
  render() {
    return (
      <>
        {menu.map(({ id, title, price, img, desc }) => {
          return (
            <>
              <div key={id} className="single-food">
                <div className="img">
                  <img src={img} />
                </div>
                <div className="title-price">
                  <h3>{title}</h3>
                  <p>{price}</p>
                </div>
                <div className="food-desc">{desc}</div>
              </div>
            </>
          );
        })}
      </>
    );
  }
}
