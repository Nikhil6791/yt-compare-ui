import { useContext } from "react";
import { YTContext } from "../context/yt.context.jsx";
import {
  fetchDataFromYoutubeApi,
  getChannelID,
  fetchChannelDataFromYoutubeApi,
} from "../services/yt.api.js";
export const useYT = () => {
  const context = useContext(YTContext);

  const {
    firstChannelData,
    setFirstChannelData,
    secondChannelData,
    setSecondChannelData,
    firstVideoData,
    setFirstVideoData,
    secondVideoData,
    setSecondVideoData,
  } = context;

  const handleYTVideoData = async ({ id, type }) => {
    const data = await fetchDataFromYoutubeApi({ id });
    console.log("Data", data);
    // const newFirstVideoData = [...firstVideoData];
    // newFirstVideoData.push(data);
    if (type === "first") {
      setFirstVideoData(data);
      console.log("First Video Data", firstVideoData);
    }

    if (type === "second") {
      setSecondVideoData(data);
      console.log("Second Video Data", secondVideoData);
    }
  };

  const handleYTChannelData = async ({ userName, type }) => {
    const data = await getChannelID({ userName });
    console.log("Data", data);
    const channelId = data.items[0].id.channelId;
    // console.log("Channel Id", channelId);

    const channelDetail = await fetchChannelDataFromYoutubeApi({ channelId });
    console.log("Channel Data", channelDetail);
    if (type === "first") {
      setFirstChannelData(channelDetail);
      console.log("First Channel Detail", firstChannelData);
    }

    if (type === "second") {
      setSecondChannelData(channelDetail);
      console.log("Second Channel Detail", secondChannelData);
    }
  };

  return { handleYTVideoData, handleYTChannelData };
};
