export const uploadToS3 = async (file: any, signedRequest: string) => {
	const xhr = new XMLHttpRequest();
	xhr.open("PUT", signedRequest);
	xhr.onreadystatechange = async () => {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				console.log("Image successfully uploaded to S3");
			} else {
				console.log("Error while sending the image to S3");
			}
		}
	};
	xhr.setRequestHeader("Content-Type", file.type);
	xhr.send({ uri: file.uri, type: file.type, name: signedRequest });
	return true;
};
