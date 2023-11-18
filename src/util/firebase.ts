import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";

// For people cloning v-port, make sure to replace this with your own config.
// Otherwise you'll just be mirroring my own content for me.
const firebaseConfig = {
  apiKey: "AIzaSyBlc0aAiSWomJmsHF_3HoWRQBFOVcKnQLs",
  authDomain: "dec-k-portfolio.firebaseapp.com",
  projectId: "dec-k-portfolio",
  storageBucket: "dec-k-portfolio.appspot.com",
  messagingSenderId: "522887252596",
  appId: "1:522887252596:web:b752388cae2529b422df21",
  measurementId: "G-V2C1HS90KZ",
};

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAnalytics = getAnalytics(FirebaseApp);
