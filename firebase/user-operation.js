import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { doc, getDoc } from "firebase/firestore";
import { storage, db } from "./config";

export const uploadAvatarToServer = async (uri, folder, fileName) => {
  const fetchResponse = await fetch(uri);
  const theBlob = await fetchResponse.blob();
  const mountainImagesRef = ref(storage, `${folder}/${fileName}`);

  await uploadBytesResumable(mountainImagesRef, theBlob);
  return await getDownloadURL(mountainImagesRef);
};

export const getUserAvatarURL = async (userId) => {
  try {
    const docRef = doc(db, "useravatars", userId);
    const docSnap = await getDoc(docRef);
    const data = docSnap.data();

    return data.avatarUrl;
  } catch (e) {
    console.log("Error adding document: ", e);
    throw e;
  }
};
