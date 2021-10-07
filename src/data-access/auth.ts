import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithRedirect,
  signOut as firebaseSignOut,
} from "firebase/auth";
import { useEffect } from "react";
import create from "zustand";
import { auth } from "./firebase";

type IAuthMethod = "google";

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

export const useAuth = () => {
  const { authState, setAuthState } = useStore();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setAuthState({
          status: "auth",
          authUser: {
            userId: firebaseUser.uid,
          },
        });
        return;
      }

      setAuthState({
        status: "unauth",
      });
    });

    return () => {
      unsubscribe();
    };
  }, [setAuthState]);

  const signIn = async ({ authMethod }: { authMethod: IAuthMethod }) => {
    if (authMethod === "google") {
      const googleAuthProvider = new GoogleAuthProvider();

      await signInWithRedirect(auth, googleAuthProvider);

      return [];
    }

    return [new Error("unsupported auth method")];
  };

  const signOut = async () => {
    await firebaseSignOut(auth);
  };

  return {
    authState,
    signIn,
    signOut,
  };
};

export const useAuthUser = () => {
  const { authState } = useAuth();

  if (authState.status === "auth") {
    return authState.authUser;
  }

  throw new Error("Trying to use auth user in an unauth context");
};
