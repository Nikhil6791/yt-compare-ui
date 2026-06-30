import YoutubeIcon from "@iconify-react/mdi/youtube";
import ButtonPlayIcon from "@iconify-react/streamline-ultimate/button-play";

export const channelCardData = {
  icon: <YoutubeIcon height="24" style={{ color: "#ff0101" }} />,
  title: "Youtube Channels",
  description: "Compare subscriber counts and metrics",
};

export const videoCardData = {
  icon: <ButtonPlayIcon height="24" style={{ color: "#ff0101" }} />,
  title: "Youtube Videos",
  description: "Compare view counts and performance",
};

export const channelSearchData = {
  title: "Select Two Channels Two Compare",
  firstInputLabel: "First Channel Link",
  secondInputLabel: "Second Channel Link",
  inputPlaceHolder: "Search for channel",
  buttonTitle: "Compare Channels",
};

export const videoSearchData = {
  title: "Select Two Video Two Compare",
  firstInputLabel: "First Video Link",
  secondInputLabel: "Second Video Link",
  inputPlaceHolder: "Search for video",
  buttonTitle: "Compare Videos",
};
