import React from "react";

const ChannelData = ({ props }) => {
  const { items } = props;

  const subscriberCount = Number(items[0].statistics.subscriberCount);
  const videoCount = Number(items[0].statistics.videoCount);
  const viewCount = Number(items[0].statistics.viewCount);

  const avgViewsPerVideo = Math.floor(viewCount / videoCount);
  const viewsPerSubscriber = Math.floor(viewCount / subscriberCount);

  return (
    <div className="border border-gray-500 flex flex-col rounded-2xl p-2 w-full">
      <p>Subscribers: {subscriberCount} </p>
      <p>Total Videos Views: {viewCount}</p>
      <p>Total Videos: {videoCount} </p>
      <p>Average Views Per Video: {avgViewsPerVideo}</p>
      <p>Average Views Per Subscriber: {viewsPerSubscriber}</p>
    </div>
  );
};

export default ChannelData;
