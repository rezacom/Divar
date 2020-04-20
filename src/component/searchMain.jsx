import React from "react";
import { FaAngleDown, FaAngleLeft } from "react-icons/fa";

export default function SearchMain(props) {
  let itemResult;
  function toggleClassSelect() {
    document
      .getElementById("SearchSelectItems")
      .classList.toggle("select-items-open");
  }

  function handleChangeInput(e) {
    let value = e.target.value;
    props.valueSearch(value);
  }

  return (
    <div className="search-container">
      <div className="search-box">
        <div className="search-box__select">
          <button
            className="search-box__select-btn"
            onClick={toggleClassSelect}
          >
            {props.catName}
            <FaAngleDown className="search-box__select-btn-icon" />
          </button>
          <ul id="SearchSelectItems" className="search-box__select-items">
            <li className="search-box__select-item">همه آگهی ها</li>
            <li className="search-box__select-item">
              املاک
              <FaAngleLeft style={{ float: "left" }} />
            </li>
            <li className="search-box__select-item">
              وسایل نقلیه
              <FaAngleLeft style={{ float: "left" }} />
              <div className="search-box__select-item-hoverbox">ddd</div>
            </li>
            <li className="search-box__select-item">
              لوازم الکترونیکی
              <FaAngleLeft style={{ float: "left" }} />
            </li>
            <li className="search-box__select-item">
              املاک
              <FaAngleLeft style={{ float: "left" }} />
            </li>
            <li className="search-box__select-item">
              وسایل نقلیه
              <FaAngleLeft style={{ float: "left" }} />
            </li>
            <li className="search-box__select-item">
              لوازم الکترونیکی
              <FaAngleLeft style={{ float: "left" }} />
            </li>
            <li className="search-box__select-item">
              املاک
              <FaAngleLeft style={{ float: "left" }} />
            </li>
            <li className="search-box__select-item">
              وسایل نقلیه
              <FaAngleLeft style={{ float: "left" }} />
            </li>
            <li className="search-box__select-item">
              لوازم الکترونیکی
              <FaAngleLeft style={{ float: "left" }} />
            </li>
          </ul>
        </div>

        <div className="search-box__search">
          <input
            type="text"
            className="search-box__search-input"
            onChange={handleChangeInput}
            placeholder={'جستجو...'}
          />
        </div>
      </div>
    </div>
  );
}
