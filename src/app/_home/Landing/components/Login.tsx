import { auth } from "@lib/db";
import {
  EmailAuthProvider,
  FacebookAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

export const Login = () => {
  auth;
  const config = {
    signInSuccessUrl: "/",
    signInOptions: [
      EmailAuthProvider.PROVIDER_ID,
      GoogleAuthProvider.PROVIDER_ID,
    ],
  };
  return (
    <div className="flex h-[300px] w-full items-center justify-center">
      <StyledFirebaseAuth uiConfig={config} firebaseAuth={auth} />
    </div>
  );
};
