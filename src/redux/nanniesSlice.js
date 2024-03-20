import { createSlice } from "@reduxjs/toolkit";
import { fetchNannies } from "./nanniesOperations";

const initialState = {
	nannies: [],
	favorites: [],
	filter: "Show all",
	isLoading: false,
	error: null,
};

const nanniesSlice = createSlice({
	name: "nannies",
	initialState,
	reducers: {
		addNanny(state, action) {
			state.favorites.push(action.payload);
		},
		removeNanny(state, action) {
			const index = state.nannies.findIndex(
				(item) => item.id == action.payload
			);
			state.favorites.splice(index, 1);
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchNannies.fulfilled, (state, action) => {
			state.isLoading = false;
			state.error = null;
			state.nannies = action.payload;
		});
	},
});

export const { addNanny, removeNanny } = nanniesSlice.actions;
export const nanniesReducer = nanniesSlice.reducer;
