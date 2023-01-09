import { firestore } from "./config";

export const usersCollection = firestore.collection("users");
export const ordersCollection = firestore.collection("orders");
