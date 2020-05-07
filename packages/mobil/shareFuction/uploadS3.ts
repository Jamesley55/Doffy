import axios from "axios";

export const uploadToS3 = async (file: any, signedRequest: string) => {
  const options = {
    headers: {
      "Content-Type": file.type,
    },
  };
  await axios.put(signedRequest, file, options);
};
