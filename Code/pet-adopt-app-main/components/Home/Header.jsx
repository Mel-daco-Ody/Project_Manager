import { View, Text, Image, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { useUser } from "@clerk/clerk-expo";
import { useRouter, useLocalSearchParams } from 'expo-router';

export default function Header() {
  const params = useLocalSearchParams();
  const { user, isLoaded } = useUser();
  
  useEffect(() => {
    if (params.loggedIn && isLoaded) {
      console.log('User Info:', user);  // Lấy thông tin người dùng sau khi đăng nhập
    }
  }, [params.loggedIn, isLoaded]);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.welcomeText}>Welcome,</Text>
        <Text style={styles.userName}>{user?.fullName}</Text>
      </View>
      <Image source={{ uri: user?.imageUrl }} style={styles.userImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  welcomeText: {
    fontFamily: "outfit-regular",
    fontSize: 18,
  },
  userName: {
    fontFamily: "outfit-bold",
    fontSize: 25,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 99,
  },
});
