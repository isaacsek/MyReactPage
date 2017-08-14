import axios from "axios";
import { FETCH_DATA } from "./types";

export const fetchData = () => {
	// redux thunk gives access to dispatch
	return async function(dispatch) {
		const res = await axios.get("http://reduxblog.herokuapp.com/api/posts");
		// payload can be "hello"

	// After recieving, manually dispatch using redux-thunk
    dispatch({type: FETCH_DATA, payload: res.data});
	};
};


export function fetchTestData() {
	return {
		type: "TEST_DATA",
		paylod: "This is test data."
	};
};
