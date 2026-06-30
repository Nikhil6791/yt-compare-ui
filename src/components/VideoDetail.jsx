import React from "react";

const VideoDetail = ({ props }) => {
  const { items } = props;
  return items?.map((elem) => {
    return (
      <div className="border border-gray-400  rounded-2xl p-2" key={elem.id}>
        <div className="flex justify-start items-center gap-6">
          <img
            src={elem.snippet.thumbnails.default.url}
            className="rounded-2xl h-16"
          />
          <p className="text-wrap">{elem.snippet.title}</p>
        </div>
      </div>
    );
  });
};

export default VideoDetail;
