const httpApi = process.env.REACT_APP_HTTP_API

const get = async (endpoint) => {
	try {
		const response = await fetch(`${httpApi}/${endpoint}`, {
			headers: {
				"Content-Type": "application/json",
			},
		});
		const dataBody = await response.json();
		return { status: response.status, dataBody };
	} catch (err) {
		return null;
	}
};

export {get};