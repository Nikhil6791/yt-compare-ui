import { createContext, useState } from "react";

export const YTContext = createContext();

export const YTProvider = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState("channel");

  const [firstVideoData, setFirstVideoData] = useState(null);
  const [secondVideoData, setSecondVideoData] = useState(null);

  const [firstChannelData, setFirstChannelData] = useState(null);
  const [secondChannelData, setSecondChannelData] = useState(null);

  const [firstInput, setFirstInput] = useState("");
  const [secondInput, setSecondInput] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [isFirstLoading, setIsFirstLoading] = useState(false);
  const [isSecondLoading, setIsSecondLoading] = useState(false);

  const [channelId, setChannelId] = useState(null);

  const resetAll = () => {
    setFirstVideoData(null);
    setSecondVideoData(null);
    setFirstInput("");
    setSecondInput("");
    setFirstChannelData(null);
    setSecondChannelData(null);
    setIsClicked(false);
  };

  return (
    <YTContext.Provider
      value={{
        selectedTab,
        setSelectedTab,
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
        resetAll,
        firstInput,
        setFirstInput,
        secondInput,
        setSecondInput,
        isClicked,
        setIsClicked,
        isFirstLoading,
        setIsFirstLoading,
        isSecondLoading,
        setIsSecondLoading,
      }}
    >
      {children}
    </YTContext.Provider>
  );
};
