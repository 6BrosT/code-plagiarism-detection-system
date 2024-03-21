import axios from "axios";

const readContentFromUrl = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
    return "";
  }
};

export default readContentFromUrl;
