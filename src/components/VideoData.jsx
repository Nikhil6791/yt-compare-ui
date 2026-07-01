import React from "react";

const VideoData = ({ props }) => {
  return (
    <div className="border border-gray-500 flex flex-col rounded-2xl p-2 w-full">
      {props?.items?.map((elem) => {
        return (
          <div className="p-2" key={elem?.id}>
            <p>Views: {elem.statistics.viewCount}</p>
            <p>Likes: {elem.statistics.likeCount}</p>
            <p>Comments: {elem.statistics.commentCount}</p>
          </div>
        );
      })}
    </div>
  );
};

export default VideoData;
