import { Firestore, collection, getDocs } from "firebase/firestore";

export async function getStarCardData(db: Firestore) {
  // GET star cards
  const starPosts = collection(db, "starPosts");
  const starPostSnapshot = await getDocs(starPosts);
  const starPostList = starPostSnapshot.docs.map((doc) => doc.data());

  return starPostList;
}
