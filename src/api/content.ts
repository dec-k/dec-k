import {
  Firestore,
  collection,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";

// Gets all star posts indiscriminately.
export async function getStarPosts(db: Firestore) {
  const starPosts = collection(db, "starPosts");
  const starPostSnapshot = await getDocs(starPosts);
  const starPostList = starPostSnapshot.docs.map((doc) => doc.data());

  return starPostList;
}

// Gets a singular star post by its document id.
export async function getStarPostById(db: Firestore, id: string) {
  const docRef = doc(db, "starPosts", id);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
}
