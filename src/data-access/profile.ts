import {
  collection,
  doc,
  onSnapshot,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useEffect } from "react";
import create from "zustand";
import { generateId } from "../utils";
import { firestore, storage } from "./firebase";

type IProfile = {
  userId: string;
  displayName?: string;
  profilePictureUrl?: string;
  gcuLastUpdatedDatetime?: string;
};

type IProfileState =
  | {
      status: "loading";
    }
  | {
      status: "success";
      profile: IProfile;
    };

type IStore = {
  profileState: IProfileState;
  setProfileState: (profileState: IProfileState) => void;
};

const useStore = create<IStore>((set) => ({
  profileState: {
    status: "loading",
  },
  setProfileState: (profileState) => set({ profileState }),
}));

const profilesRef = collection(firestore, "profiles");

const getProfileDocRef = ({ userId }: { userId: string }) => {
  return doc(profilesRef, userId);
};

export const useProfile = ({ userId }: { userId: string }) => {
  const { profileState, setProfileState } = useStore();

  useEffect(() => {
    setDoc(getProfileDocRef({ userId }), {}, { merge: true });

    return onSnapshot(getProfileDocRef({ userId }), (doc) => {
      const profile = doc.data() as IProfile | undefined;

      if (profile) {
        setProfileState({
          status: "success",
          profile,
        });
        return;
      }
    });
  }, [userId, setProfileState]);

  const updateProfilePicture = async ({
    profilePictureFile,
  }: {
    profilePictureFile: File;
  }) => {
    const storageRef = ref(storage, `profilePictures/${generateId()}`);

    await uploadBytes(storageRef, profilePictureFile);

    const downloadUrl = await getDownloadURL(storageRef);

    await updateDoc(getProfileDocRef({ userId }), {
      profilePictureUrl: downloadUrl,
    });
  };

  const updateProfile = async (profile: Partial<IProfile>) => {
    await updateDoc(getProfileDocRef({ userId }), profile);
  };

  return {
    profileState,
    updateProfilePicture,
    updateProfile,
  };
};
