import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../config/FirebaseConfig";
import { useUser } from "@clerk/clerk-expo";
import UserItem from "../../components/Inbox/UserItem";

export default function Inbox() {
  const { user } = useUser();
  const [userList, setUserList] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (user) {
      GetUserLists();
    }
  }, [user]);

  // Get user list depending on current user email
  const GetUserLists = async () => {
    if (!user) return; // Exit if user is undefined

    setLoader(true);
    setUserList([]); // Clear user list for fresh data

    const q = query(
      collection(db, "Chat"),
      where("userIds", "array-contains", user.primaryEmailAddress?.emailAddress)
    );

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setUserList((prevList) => [...prevList, doc.data()]);
    });

    setLoader(false);
  };

  // Filter the list to show only the other user in each chat
  const MapOtherUserList = () => {
    if (!user) return []; // Return an empty list if user is undefined

    const list = [];
    userList.forEach((record) => {
      const otherUser = record.users?.find(
        (u) => u.email !== user.primaryEmailAddress?.emailAddress
      );

      if (otherUser) {
        const result = {
          docId: record.id,
          ...otherUser,
        };
        list.push(result);
      }
    });

    return list;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.inboxHeader}>Inbox</Text>
      <FlatList
        data={MapOtherUserList()} // Use only the list of other users
        onRefresh={GetUserLists}
        refreshing={loader}
        style={{ marginTop: 20 }}
        renderItem={({ item, index }) => (
          <UserItem userInfo={item} key={index} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 5,
  },
  inboxHeader: {
    fontFamily: "outfit-medium",
    fontSize: 30,
  },
});
