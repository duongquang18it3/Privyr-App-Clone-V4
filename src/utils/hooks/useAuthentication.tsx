import { useApi } from "./useApi";
import { useState, useEffect } from "react";

export const useAuthentication = (client_id: string, client_secret: string) => {
	const [response, setResponse] = useState(null);
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(true);

	const fetchData = async () => {
		try {
			const formData = new FormData();
			formData.append("client_id", client_id);
			formData.append("client_secret", client_secret);

			await fetch(
				"http://192.46.229.203:8069/restapi/1.0/common/oauth2/access_token",
				{
					method: "post", // *GET, POST, PUT, DELETE, etc.
					mode: "no-cors", // no-cors, *cors, same-origin
					cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
					// credentials: "same-origin", // include, *same-origin, omit
					// redirect: "follow", // manual, *follow, error
					referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
					headers: {
						"Content-type": "charset=UTF-8",
					},
					body: formData,
				}
			).then(async (apiResponse) => {
				console.log("111111111111111111", apiResponse);
				// apiResponse.json().then((json) => {
				// 	console.log("222222222222", json);
				// });
			});
		} catch (error: any) {
			setError(error);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	// custom hook returns value
	return { response, error, loading };
};
