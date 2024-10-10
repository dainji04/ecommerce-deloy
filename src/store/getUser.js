import firebase from "firebase/compat/app";
import "firebase/auth";
import { onAuthStateChanged, getAuth } from "firebase/auth";

import { Checklogin } from "./login";

export default function () {
  const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
      const removeListener = onAuthStateChanged(
        getAuth(),
        (user) => {
          removeListener();
          resolve(user);
        },
        reject
      );
    });
  };
  return {
    getCurrentUser,
  };
}
