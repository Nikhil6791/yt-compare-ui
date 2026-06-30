import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api/yt`,
  withCredentials: true,
});

console.log(api.defaults.baseURL);

export const fetchDataFromYoutubeApi = async ({ id }) => {
  console.log("Id", id);
  try {
    const response = await api.get(`/video/${id}`);

    return response.data;
  } catch (error) {
    console.log(error);
    // console.log(error.response.data.error.errors);
  }

  // console.log(response.data);
};

export const getChannelID = async ({ userName }) => {
  try {
    const response = await api.get(`/channel/${userName}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
  console.log(response);
};

export const fetchChannelDataFromYoutubeApi = async ({ channelId }) => {
  console.log("Frontend function called", channelId);

  console.log("Channel Id", channelId);
  try {
    const response = await api.get(`/channel/search/${channelId}`);
    console.log(response);
    console.log("Calling URL:", `/channel/search/${channelId}`);
    return response.data;
  } catch (error) {
    console.log(error);
    // console.log(error.response.data.error.errors);
  }
};
