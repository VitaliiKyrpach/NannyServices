import app from "../firebaseConfig";
import {
	// collection,
	getDatabase,
	ref,
	get,
	// getDocs,
	// limitToLast,
} from "firebase/database";
// import {
// 	collection,
// 	getDoc,
// 	limit,
// 	query,
// 	where,
// } from "firebase/firestore";

export const fetchData = async () => {
	const db = getDatabase(app);
	const dbRef = ref(db, "nannies");
	const snapshot = await get(dbRef);
	if (snapshot.exists()) {
		// setFruitArray(Object.values(snapshot.val()));
		console.log(snapshot.val());
	} else {
		alert("error");
	}
	return snapshot.val();
};
// export const fetchData = async () => {
// 	const db = getDatabase(app);
// 	const dataRef = collection(db, "nannies");
// 	const dataQuery = query(dataRef, where("age"), limit(1));
// 	const snapshot = await getDoc(dataQuery);
// 	if (snapshot.exists()) {
// 		// setFruitArray(Object.values(snapshot.val()));
// 		console.log(snapshot.data());
// 	} else {
// 		alert("error");
// 	}
// 	return snapshot.val();
// };
