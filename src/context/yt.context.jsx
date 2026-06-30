import { createContext, useState } from "react";

export const YTContext = createContext();

export const YTProvider = ({ children }) => {
  const [firstVideoData, setFirstVideoData] = useState(null);
  const [secondVideoData, setSecondVideoData] = useState(null);

  const [firstChannelData, setFirstChannelData] = useState(null);
  const [secondChannelData, setSecondChannelData] = useState(null);

  const [channelId, setChannelId] = useState(null);

  return (
    <YTContext.Provider
      value={{
        firstVideoData,
        setFirstVideoData,
        secondVideoData,
        setSecondVideoData,
        firstChannelData,
        setFirstChannelData,
        secondChannelData,
        setSecondChannelData,
        channelId,
        setChannelId,
      }}
    >
      {children}
    </YTContext.Provider>
  );
};
