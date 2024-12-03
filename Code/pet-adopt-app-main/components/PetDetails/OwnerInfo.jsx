import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, {useEffect} from "react";
import Colors from "../../constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import { useUser } from "@clerk/clerk-expo";
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { db } from "../../config/FirebaseConfig";

export default function OwnerInfo({ pet }) {
  const navigation = useNavigation();
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      headerTitle: "",
    });
    // console.log("Pet details", pet);
  }, []);

  // Used to initiate chat between two user
  const initiateChat = async () => {
    const docId1 =
      user?.primaryEmailAddress?.emailAddress + "_" + pet?.userEmail;
    const docId2 =
      pet?.userEmail + "_" + user?.primaryEmailAddress?.emailAddress;
    // console.log("docIds", docId1, docId2);

    const q = query(
      collection(db, "Chat"),
      where("id", "in", [docId1, docId2])
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // console.log("Document data:", doc.data());
      router.push({
        pathname: "/chat",
        params: { id: doc.id },
      });
    });
    if (querySnapshot.docs?.length == 0) {
      await setDoc(doc(db, "Chat", docId1), {
        id: docId1,
        users: [
          {
            email: user?.primaryEmailAddress?.emailAddress,
            image: user?.imageUrl,
            name: user?.fullName,
          },
          {
            email: pet?.userEmail,
            image: pet?.userImage,
            name: pet?.userName,
          },
        ],
        userIds: [user?.primaryEmailAddress?.emailAddress, pet?.userEmail],
      });
      router.push({
        pathname: "/chat",
        params: { id: docId1 },
      });
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Image source={{ uri: pet?.userImage }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.userName}>{pet?.userName}</Text>
          <Text style={styles.userRole}>Pet Owner</Text>
        </View>
      </View>
      <TouchableOpacity onPress={initiateChat}>
      <Ionicons name="send-sharp" size={24} color={Colors.PRIMARY} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginBottom: 70,
    paddingHorizontal: 20,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.PRIMARY,
    backgroundColor: Colors.WHITE,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "black",
    marginRight: 20,
  },
  textContainer: {
    flex: 1,
  },
  userName: {
    fontFamily: "outfit-medium",
    fontSize: 17,
  },
  userRole: {
    fontFamily: "outfit-regular",
    color: Colors.GRAY,
  },
});
