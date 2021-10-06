import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged as onFirebaseAuthStateChanged,
  signInWithRedirect,
  signOut as firebaseSignOut,
} from "firebase/auth";
import { useEffect } from "react";
import create from "zustand";

const firebaseConfig = {
  apiKey: "AIzaSyBG4p0DbPxzwlZ2N6iDnIc8rluD6maVO0g",
  authDomain: "fake-id-4ffcb.firebaseapp.com",
  projectId: "fake-id-4ffcb",
  storageBucket: "fake-id-4ffcb.appspot.com",
  messagingSenderId: "932010719951",
  appId: "1:932010719951:web:40472818ed8495992cd5ba",
  measurementId: "G-1CJF5B61SR",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

type IAuthMethod = "google";

export const signIn = async ({ authMethod }: { authMethod: IAuthMethod }) => {
  if (authMethod === "google") {
    const googleAuthProvider = new GoogleAuthProvider();

    await signInWithRedirect(auth, googleAuthProvider);

    return [];
  }

  return [new Error("unsupported auth method")];
};

export const signOut = async () => {
  await firebaseSignOut(auth);
};

type IAuthState =
  | {
      status: "loading";
    }
  | {
      status: "auth";
      authUser: {
        userId: string;
      };
    }
  | {
      status: "unauth";
    };

export const onAuthStateChanged = (
  set: (authState: IAuthState) => void
): (() => void) => {
  set({ status: "loading" });
  return onFirebaseAuthStateChanged(auth, (firebaseUser) => {
    if (firebaseUser) {
      set({
        status: "auth",
        authUser: {
          userId: firebaseUser.uid,
        },
      });
      return;
    }

    set({
      status: "unauth",
    });
  });
};

type IStore = {
  authState: IAuthState;
  setAuthState: (authState: IAuthState) => void;
};

const useStore = create<IStore>((set) => ({
  authState: {
    status: "loading",
  },

  setAuthState: (authState) => set({ authState }),
}));

export const useAuthState = () => {
  const { authState, setAuthState } = useStore();

  useEffect(() => {
    return onAuthStateChanged(setAuthState);
  }, [setAuthState]);

  return authState;
};

export const useProfileState = () => {};
