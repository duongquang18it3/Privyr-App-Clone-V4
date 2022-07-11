import { useState, useEffect } from "react";

export type ApiPropsType = {
	url: string;
	method?: string;
	header?: any;
	body?: any;
};

export type ApiResponseType = {
	status: Number;
	statusText: String;
	data: any;
	error: any;
	loading: Boolean;
};

export const useApi = (props: ApiPropsType): ApiResponseType => {
	const [status, setStatus] = useState<Number>(0);
	const [statusText, setStatusText] = useState<String>("");
	const [data, setData] = useState<any>();
	const [error, setError] = useState<any>();
	const [loading, setLoading] = useState<boolean>(false);

	const getAPIData = async () => {
		setLoading(true);
		try {
			const apiResponse = await fetch(
				`http://192.46.229.203:8069/restapi/1.0${props.url}`,
				{
					method: props.method ?? "get", // *GET, POST, PUT, DELETE, etc.
					mode: "no-cors", // no-cors, *cors, same-origin
					// cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
					credentials: "omit", // include, *same-origin, omit
					// redirect: "follow", // manual, *follow, error
					// referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
					headers: {
						// "Content-type": "charset=UTF-8",
						Authorization:
							"Bearer s6G8iq3ioWGpea6BwATp84l1EnBeKYlq",
					},
					body: props.body ? JSON.parse(props.body) : null,
				}
			);
			const json = await apiResponse.json();
			setStatus(apiResponse.status);
			setStatusText(apiResponse.statusText);
			setData(json);
		} catch (error) {
			setError(error);
		}
		setLoading(false);
	};

	useEffect(() => {
		getAPIData();
	}, []);

	return { status, statusText, data, error, loading };
};
