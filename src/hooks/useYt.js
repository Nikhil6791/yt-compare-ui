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
    setFirstChannelData,
    setSecondChannelData,
    setFirstVideoData,
    setSecondVideoData,
    setIsFirstLoading,
    setIsSecondLoading,
  } = context;

  const handleYTVideoData = async ({ id, type }) => {
    const data = await fetchDataFromYoutubeApi({ id });
    if (type === "first") {
      setFirstVideoData(data);
      setIsFirstLoading(false);
    }

    if (type === "second") {
      setSecondVideoData(data);
      setIsSecondLoading(false);
    }
  };

  const handleYTChannelData = async ({ userName, type }) => {
    const data = await getChannelID({ userName });
    console.log("Data", data);
    const channelId = data.items[0].id.channelId;
    console.log("Channel Id", channelId);

    const channelDetail = await fetchChannelDataFromYoutubeApi({ channelId });
    if (type === "first") {
      setFirstChannelData(channelDetail);
      setIsFirstLoading(false);
    }

    if (type === "second") {
      setSecondChannelData(channelDetail);
      setIsSecondLoading(false);
    }
  };

  return { handleYTVideoData, handleYTChannelData };
};
