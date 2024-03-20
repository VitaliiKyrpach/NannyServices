import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "../firebase/fetch";

export const fetchNannies = createAsyncThunk(
	"nannies/fetchData",
	async (_, { rejectWithValue }) => {
		try {
			const response = await fetchData();
			return response;
		} catch (error) {
			return rejectWithValue;
		}
	}
);
