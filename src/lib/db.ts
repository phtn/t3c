import { initializeApp as init } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const config = {
  apiKey: process.env.NEXT_PUBLIC_F_API_KEY,
  authDomain: process.env.F_AUTH_DOMAIN,
  projectId: process.env.F_PROJECT_ID,
  storageBucket: process.env.F_STORAGE,
  messagingSenderId: process.env.F_MESSAGING,
  appId: process.env.F_APP_ID,
  measurementId: process.env.F_COCK_LENGTH,
};

const app = init(config);
export const db = getFirestore(app);
export const auth = getAuth(app);
