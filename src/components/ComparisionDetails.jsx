import React, { useState, useRef } from "react";
import axios from "axios";
import { useYT } from "../hooks/useYt.js";
import { useContext } from "react";
import { YTContext } from "../context/yt.context.jsx";
import SearchDetail from "./SearchDetail.jsx";
import VideoData from "./VideoData.jsx";
import { useNavigate } from "react-router-dom";
import ChannelData from "./ChannelData.jsx";
import SearchInput from "./SearchInput.jsx";

const ComparisionDetails = ({ props, tab }) => {
  // const { inputPlaceHolder } = props;
  const firstButtonRef = useRef();
  const secondButtonRef = useRef();
  const navigate = useNavigate();
  const context = useContext(YTContext);
  const {
    firstVideoData,
    secondVideoData,
    setFirstVideoData,
    setSecondVideoData,
    firstChannelData,
    setFirstChannelData,
    secondChannelData,
    setSecondChannelData,
    firstInput,
    setFirstInput,
    secondInput,
    setSecondInput,
    isClicked,
    setIsClicked,
    resetAll,
  } = context;
  const isChannelTab = tab === "channel";
  const isVideoTab = tab === "video";

  const isDisabled = isVideoTab
    ? !firstVideoData || !secondVideoData
    : !firstChannelData || !secondChannelData;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const { handleYTVideoData, handleYTChannelData } = useYT();

  const handleYTVideoDataCaller = async (e) => {
    let input;
    let type;
    if (e.currentTarget === firstButtonRef.current) {
      input = firstInput;
      type = "first";
    } else {
      input = secondInput;
      type = "second";
    }

    let linkArr = input.split("/");
    let id = linkArr[linkArr.length - 1].split("?")[0];
    let userName = linkArr[linkArr.length - 1].split("?")[0];
    if (isVideoTab) {
      await handleYTVideoData({ id, type });
    }

    if (isChannelTab) {
      await handleYTChannelData({ userName, type });
    }
  };

  return (
    <>
      <h1 className="text-2xl text-center text-bold my-6">{props.title}</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col sm:flex-row items-center justify-around gap-4">
          <SearchInput
            value={firstInput}
            onChange={setFirstInput}
            ref={firstButtonRef}
            onClick={handleYTVideoDataCaller}
            label={props.firstInputLabel}
            placeholder={props.inputPlaceHolder}
          />
          <SearchInput
            value={secondInput}
            onChange={setSecondInput}
            ref={secondButtonRef}
            onClick={handleYTVideoDataCaller}
            label={props.secondInputLabel}
            placeholder={props.inputPlaceHolder}
          />
        </div>

        <div className="grid grid-cols-2 gap-4 my-4">
          {firstVideoData && <SearchDetail props={firstVideoData} />}
          {secondVideoData && <SearchDetail props={secondVideoData} />}
        </div>

        <div className="grid grid-cols-2 gap-4 my-4">
          {firstChannelData && <SearchDetail props={firstChannelData} />}
          {secondChannelData && <SearchDetail props={secondChannelData} />}
        </div>

        <div className="buttons flex justify-end items-center gap-4 mt-5">
          <button
            onClick={() => setIsClicked(true)}
            disabled={isDisabled}
            className={`font-semibold rounded-xl px-5 py-2
    ${
      isDisabled
        ? "bg-gray-400 cursor-not-allowed"
        : "bg-gray-500 hover:bg-gray-400 cursor-pointer"
    }`}
          >
            {props.buttonTitle}
          </button>

          <button
            onClick={resetAll}
            className="border font-semibold border-gray-400 hover:bg-gray-400 cursor-pointer rounded-xl px-5 py-2"
          >
            Reset
          </button>
        </div>
      </form>

      {firstInput &&
      secondInput &&
      (isVideoTab
        ? firstVideoData && secondVideoData
        : firstChannelData && secondChannelData) &&
      isClicked &&
      firstInput === secondInput ? (
        <div className="border border-red-400 m-4 p-4 rounded-2xl">
          <p>You have entered two same links</p>
        </div>
      ) : (
        <div className="flex gap-4 m-4 w-full justify-between">
          {firstVideoData && secondVideoData && (
            <div className="flex justify-around items-center gap-4 w-full">
              {isClicked && <VideoData props={firstVideoData} />}
              {isClicked && <VideoData props={secondVideoData} />}
            </div>
          )}

          {firstChannelData && secondChannelData && (
            <div className="flex justify-around items-center gap-4 w-full">
              {isClicked && <ChannelData props={firstChannelData} />}
              {isClicked && <ChannelData props={secondChannelData} />}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ComparisionDetails;
