import {useEffect, useState} from "react";

const useFetch = (url)=> {
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [data, setData] = useState([]);

	useEffect(()=> {
		const abortController = new AbortController();
		const signal = abortController.signal;

		const getData = async ()=> {
			try {
				setIsError(false)
				setIsLoading(true)
				const res = await fetch(url, {signal});
				const data = await res.json();
				setData(data);
			} catch (error) {
				console.log(error.message);
				setIsError(true)
			} finally {
				setIsLoading(false)
			}

		}
		getData();

		return ()=> {
			abortController.abort();
		}
	}, [url])

	return {data, isLoading, isError};
}

export default useFetch;
