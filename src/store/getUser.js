import firebase from "firebase/compat/app";
import "firebase/auth";

import { Checklogin } from "./login";

export default function () {
  let userInfo = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
  };

  const getUser = async () => {
    const Checklog = Checklogin();
    Checklog.userCheck();
    try {
      const currentUser = firebase.auth().currentUser;
      console.log("user: ", currentUser);
      userInfo.email = await currentUser.email;
      userInfo.phoneNumber = await currentUser.phoneNumber;
      const name = await currentUser.displayName;
      for (var i = name.length; i >= 0; i--) {
        if (name[i] == " ") {
          for (var j = i; j < name.length; j++) {
            userInfo.lastName += name[j];
          }
          for (var j = 0; j < i; j++) {
            userInfo.firstName += name[j];
          }
          break;
        }
      }
    } catch (error) {
      console.error("Error getting user: ", error);
    }
  };
  return {
    userInfo,
    getUser,
  };
}
