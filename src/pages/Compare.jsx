import React, { useContext, useEffect, useState } from "react";
import Card from "../components/Card";
import {
  channelCardData,
  videoCardData,
  channelSearchData,
  videoSearchData,
} from "../data";
import ComparisionDetails from "../components/ComparisionDetails";
import { YTContext } from "@/context/yt.context";
const Compare = () => {
  const { selectedTab, setSelectedTab } = useContext(YTContext);
  const [comparisionData, setComparisionData] = useState(channelSearchData);

  useEffect(() => {
    if (selectedTab === "video") {
      setComparisionData(videoSearchData);
    }

    if (selectedTab === "channel") {
      setComparisionData(channelSearchData);
    }
  }, [selectedTab]);

  return (
    <div className="flex justify-center items-center m-8">
      <div className="border flex justify-center items-center flex-col border-gray-400 rounded-xl p-4">
        <div className="flex flex-col sm:flex-row w-full justify-between items-center gap-4">
          <Card
            props={channelCardData}
            onClick={() => setSelectedTab("channel")}
            className={selectedTab === "channel" ? "border-red-500" : ""}
          />
          <Card
            props={videoCardData}
            onClick={() => setSelectedTab("video")}
            className={selectedTab === "video" ? "border-red-500" : ""}
          />
        </div>
        {comparisionData && <ComparisionDetails props={comparisionData} />}
      </div>
    </div>
  );
};

export default Compare;
