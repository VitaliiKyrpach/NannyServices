import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";

import { nanniesReducer } from "./nanniesSlice";

const nanniesPersistConfig = {
	key: "nannies",
	storage,
	whitelist: ["favorites", "page"],
};

export const store = configureStore({
	reducer: {
		nannies: persistReducer(nanniesPersistConfig, nanniesReducer),
		// filter: persistReducer(favCarsPersistConfig, setFilters),
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [
					FLUSH,
					REHYDRATE,
					PAUSE,
					PERSIST,
					PURGE,
					REGISTER,
				],
			},
		}),
	devTools: import.meta.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
