import React, { Component } from "react";
import menu from "../../assets/data";
import Card from "../Card.jsx/Card";

export default class FoodItem extends Component {
  render() {
    return (
      <>
        {menu?.map(({ id, title, price, img, desc, link }) => {
          return (
            <Card
              key={id}
              title={title}
              price={price}
              img={img}
              desc={desc}
              link={link}
            />
          );
        })}
      </>
    );
  }
}
