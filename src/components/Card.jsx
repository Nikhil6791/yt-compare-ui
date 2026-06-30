import React, { useState } from "react";
import { channelSearchData, videoSearchData } from "../data/index.jsx";
import ComparisionDetails from "./ComparisionDetails";
const Card = ({ props, setComparisionData, setSelectedTab, tab }) => {
  const handleClick = () => {
    setSelectedTab(tab);
    if (tab === "video") {
      setComparisionData(videoSearchData);
    }

    if (tab === "channel") {
      setComparisionData(channelSearchData);
    }
  };
  return (
    <div
      onClick={handleClick}
      className="cursor-pointer hover:border-blue-500  border border-gray-400 p-4 rounded-2xl w-full"
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
