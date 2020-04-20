import React from "react";
import { FaRegComments } from "react-icons/fa";
import defaultImage from "../images/default.jpg";

export default function Cart(props) {
  // console.log(props.cartDate.data.title)

  
  return (
      <>
        <div className="cart-box__content">
          <h3 className="cart-box__content-title">
            {props.cartDate.data.title}
          </h3>
          <span className="cart-box__content-price">
            {props.cartDate.data.description}
          </span>
          <span className="cart-box__content-location">
            {props.cartDate.data.normal_text}
            <FaRegComments className="cart-box__content-location-icon" />
          </span>
        </div>
        <div className="cart-box__image">
          {props.cartDate.data.image ? (
            <img src={props.cartDate.data.image} alt="" />
          ) : (
            <img src={defaultImage} alt="" />
          )}
        </div>
      </>
  );
}
