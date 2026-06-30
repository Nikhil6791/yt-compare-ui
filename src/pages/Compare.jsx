import React, { useState } from "react";
import Card from "../components/Card";
import { channelCardData, videoCardData, channelSearchData } from "../data";
import ComparisionDetails from "../components/ComparisionDetails";
const Compare = () => {
  const [comparisionData, setComparisionData] = useState(channelSearchData);
  const [selectedTab, setSelectedTab] = useState("channel");
  console.log("Component rendered");
  return (
    <div className="flex-1 flex justify-center items-center m-8">
      <div className="border flex justify-center items-center flex-col border-gray-400 rounded-xl p-4">
        <div className="flex justify-between items-center gap-4 w-full">
          <Card
            props={channelCardData}
            setComparisionData={setComparisionData}
            setSelectedTab={setSelectedTab}
            tab="channel"
          />
          <Card
            props={videoCardData}
            setComparisionData={setComparisionData}
            setSelectedTab={setSelectedTab}
            tab="video"
          />
        </div>
        {comparisionData && (
          <ComparisionDetails props={comparisionData} tab={selectedTab} />
        )}
      </div>
    </div>
  );
};

export default Compare;
