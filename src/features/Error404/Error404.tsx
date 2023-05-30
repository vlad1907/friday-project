import React from "react";
import style from "./Error404.module.css";
import image from "assets/images/error404.png";

export const Error404 = () => {
  return (
    <div className={style.onStyle}>
      <img src={image} alt="Error 404" />
    </div>
  );
};
