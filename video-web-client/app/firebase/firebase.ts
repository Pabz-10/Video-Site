// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	onAuthStateChanged,
	User,
} from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAvYwCIv4lQLii0Oga_jS0_rqYLoo4AeJ4",
	authDomain: "yt-clone-2eca4.firebaseapp.com",
	projectId: "yt-clone-2eca4",
	appId: "1:961005942946:web:e46c8a17d031daaf553ffb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

// Signs the user in with a Google popup
// returns a promise that resolves with the users credentials
export function signInWithGoogle() {
	return signInWithPopup(auth, new GoogleAuthProvider());
}

//signs the user out
export function signOut() {
	return auth.signOut();
}

//Triggers a callback when the users auth state changes

export function onAuthStateChangedHelper(
	callback: (user: User | null) => void
) {
	return onAuthStateChanged(auth, callback);
}
