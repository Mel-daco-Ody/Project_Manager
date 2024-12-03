import { View, StyleSheet } from "react-native";
import React from "react";
import PetSubInfoCard from "./PetSubInfoCard";

export default function PetSubInfo({ pet }) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {/* Age */}
        <PetSubInfoCard
          icon={require("./../../assets/images/calendar.png")}
          title={"Age"}
          value={pet?.age + " Yrs"}
        />
        {/* Breed */}
        <PetSubInfoCard
          icon={require("./../../assets/images/bone.png")}
          title={"Breed"}
          value={pet?.breed}
        />
      </View>
      <View style={styles.row}>
        {/* Sex */}
        <PetSubInfoCard
          icon={require("./../../assets/images/sex.png")}
          title={"Sex"}
          value={pet?.sex}
        />
        {/* Weight */}
        <PetSubInfoCard
          icon={require("./../../assets/images/weight.png")}
          title={"Weight"}
          value={pet?.weight + " Kg"}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: "row",
  },
});
