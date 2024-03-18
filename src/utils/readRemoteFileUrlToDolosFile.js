import { File } from "@dodona/dolos-lib";
import axios from "axios";

const readRemoteFileUrlToDolosFile = async ({ id, url, extra }) => {
  const response = await axios.get(url);

  return new File(url, response.data, extra, id);
};

export default readRemoteFileUrlToDolosFile;
