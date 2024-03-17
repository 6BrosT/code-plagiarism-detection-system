import { ExtraInfo, File } from '@dodona/dolos-lib';
import axios from 'axios';

const readRemoteFileUrlToDolosFile = async ({
  id,
  url,
  extra,
}: {
  id?: number;
  url: string;
  extra?: ExtraInfo;
}): Promise<File> => {
  const response = await axios.get(url);

  return new File(url, response.data, extra, id);
};

export default readRemoteFileUrlToDolosFile;
