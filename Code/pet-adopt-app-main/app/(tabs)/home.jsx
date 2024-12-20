import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import React, { useEffect } from "react";
import Header from "../../components/Home/Header";
import Slider from "../../components/Home/Slider";
import PetListByCategory from "../../components/Home/PetListByCategory";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Colors from "../../constants/Colors";
import { Link, router } from "expo-router";
import { useUser } from '@clerk/clerk-expo';


export default function Home() {
  
  return (
    <ScrollView
      style={{
        padding: 20,
        marginTop: 20,  
      }}
    >
      {/* Header */}
      <Header />

      {/* Slider */}
      <Slider />

      {/* PetList + Category */}
      <PetListByCategory />

      {/* Add New Pet Option */}
      <TouchableOpacity
        onPress={() =>
          router.push({
            pathname: "/add-new-pet",
          })
        }
        style={styles.addNewPetContainer}
      >
        <MaterialIcons name="pets" size={24} color={Colors.PRIMARY} />
        <Text style={styles.addNewPetTxt}>Add New Pet</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  addNewPetContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: 20,
    marginTop: 20,
    marginBottom: 40,
    backgroundColor: Colors.LIGHT_PRIMARY,
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
    borderRadius: 15,
    borderStyle: "dashed",
  },
  addNewPetTxt: {
    fontFamily: "outfit-medium",
    fontSize: 18,
    color: Colors.PRIMARY,
  },
});
