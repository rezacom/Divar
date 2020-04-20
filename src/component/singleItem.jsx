import React from "react";
import { BrowserRouter as Router, Switch, useLocation } from "react-router-dom";
import { FaRegComments } from "react-icons/fa";
export default function SingleItem() {
  const params = useLocation();
  const state = params.state.item;
  console.log(params);

  return (
    <div className="single-item">
      <div className="single-item__discription">
        <h2 className="single-item__discription-title">{state.data.title}</h2>
        <span className="single-item__discription-normal-text">
          {state.data.normal_text}
        </span>
        <div className="single-item__discription-btn">
          <button type="button" className="single-item__discription-btn-contact">دریافت اطلاعات تماس</button>
          <button type="button" className="single-item__discription-btn-chat"> <FaRegComments /> شروع چت </button>
          <button type="button" className="single-item__discription-btn-bokmark">نشان کردن</button>
        </div>
        <div className="single-item__discription-item">
          <span>دسته بندی</span>
          <span>{state.data.category}</span>
        </div>
        <div className="single-item__discription-item">
          <span>استان</span>
          <span>{state.data.city}</span>
        </div>
        <div className="single-item__discription-item">
          <span>محل</span>
          <span>{state.data.district}</span>
        </div>
        <div className="single-item__discription-item">
          <span>نوع آگهی</span>
          <span>فروشی</span>
        </div>
        <div className="single-item__discription-item">
          <span>قیمت</span>
          <span>{state.data.description}</span>
        </div>
      </div>
      <div className="single-item__img">
        <img src={state.data.image} alt="" />
      </div>
    </div>
  );
}
