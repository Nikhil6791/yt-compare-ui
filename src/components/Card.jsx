import React, { useState, useContext } from "react";
import { YTContext } from "../context/yt.context.jsx";
import { channelSearchData, videoSearchData } from "../data/index.jsx";
import ComparisionDetails from "./ComparisionDetails";

const Card = ({ props, onClick, className }) => {
  const context = useContext(YTContext);
  const { resetAll } = context;

  const handleClick = () => {
    onClick();
    resetAll();
  };

  return (
    <div
      onClick={handleClick}
      className={`cursor-pointer border p-4 rounded-2xl w-full ${className}`}
    >
      <div className="heading flex gap-2 items-center justify-center">
        {props.icon}
        <p className="text-xl">{props.title}</p>
      </div>
      <p className="text-md text-center">{props.description}</p>
    </div>
  );
};

export default Card;
