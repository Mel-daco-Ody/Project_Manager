import {
    View,
    Text,
    StyleSheet,
    TextInput,
    ScrollView,
    TouchableOpacity,
    Pressable,
    ToastAndroid,
    Platform,
    Alert,
    ActivityIndicator,
  } from "react-native";
  import React, { useEffect, useState } from "react";
  import { useNavigation } from "expo-router";
  import Colors from "../../constants/Colors";
  import { Picker } from "@react-native-picker/picker";
  import { useUser } from "@clerk/clerk-expo";
  import { router } from 'expo-router';
  
  export default function AddAdopter() {
    const navigation = useNavigation();
    const [formData, setFormData] = useState({
      gender: "male",
      petCareExperience: "Newbie",
    });
    const [loader, setLoader] = useState(false);
    const { user } = useUser();
  
    useEffect(() => {
      navigation.setOptions({
        headerTitle: "Adopt a Pet",
      });
    }, []);
  
    const handleInputChange = (fieldName, fieldValue) => {
      setFormData((prev) => ({
        ...prev,
        [fieldName]: fieldValue,
      }));
    };
  
    const onSubmit = () => {
      // Validate form inputs
      if (Object.values(formData).some((value) => !value)) {
        if (Platform.OS === "android") {
          ToastAndroid.show("Please fill all the Details", ToastAndroid.SHORT);
        } else {
          Alert.alert("Please fill all the Details");
        }
        return;
      }

      // Handle submission logic here
      console.log("Form Data:", formData);

      const regex = /[^0~9]/g;
      if(phoneNumber.length < 10 || regex.test(phoneNumber)){
        alert("Invalid Phone Number");
        return;
      }

      router.replace({ pathname: '/sms-otp'});
      // e.g., save data to Firestore or handle further actions
    };
  
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.headerTitle}>Adoption Application</Text>
        
        {/* Fullname */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputTextLabel}>Fullname *</Text>
          <TextInput
            style={styles.inputText}
            onChangeText={(value) => handleInputChange("fullname", value)}
          />
        </View>
        
        {/* Gender Picker */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputTextLabel}>Gender *</Text>
          <Picker
            selectedValue={formData.gender}
            style={styles.inputText}
            onValueChange={(itemValue) => handleInputChange("gender", itemValue)}
          >
            <Picker.Item label="Male" value="male" />
            <Picker.Item label="Female" value="female" />
            <Picker.Item label="Other" value="other" />
          </Picker>
        </View>
  
        {/* Email */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputTextLabel}>Email *</Text>
          <TextInput
            style={styles.inputText}
            onChangeText={(value) => handleInputChange("email", value)}
            keyboardType="email-address"
          />
        </View>
        
        {/* Address */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputTextLabel}>Address *</Text>
          <TextInput
            style={styles.inputText}
            onChangeText={(value) => handleInputChange("address", value)}
          />
        </View>
  
        {/* Phone Number */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputTextLabel}>Phone Number *</Text>
          <TextInput
            style={styles.inputText}
            onChangeText={(value) => handleInputChange("phoneNumber", value)}
            keyboardType="phone-pad"
          />
        </View>
  
        {/* Job */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputTextLabel}>Job *</Text>
          <TextInput
            style={styles.inputText}
            onChangeText={(value) => handleInputChange("job", value)}
          />
        </View>
  
        {/* Age */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputTextLabel}>Age *</Text>
          <TextInput
            style={styles.inputText}
            keyboardType="numeric"
            onChangeText={(value) => handleInputChange("age", value)}
          />
        </View>
  
        {/* Petcare Experience Picker */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputTextLabel}>Petcare Experience *</Text>
          <Picker
            selectedValue={formData.petCareExperience}
            style={styles.inputText}
            onValueChange={(itemValue) => handleInputChange("petCareExperience", itemValue)}
          >
            <Picker.Item label="Newbie" value="Newbie" />
            <Picker.Item label="Medium" value="Medium" />
            <Picker.Item label="High" value="High" />
          </Picker>
        </View>
  
        {/* Why do you want to adopt him? */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputTextLabel}>Why do you want to adopt him? *</Text>
          <TextInput
            style={styles.inputText}
            numberOfLines={5}
            multiline={true}
            onChangeText={(value) => handleInputChange("adoptionReason", value)}
          />
        </View>
  
        {/* Submit Button */}
        <TouchableOpacity
          disabled={loader}
          style={styles.submitBtn}
          onPress={onSubmit}
        >
          {loader ? (
            <ActivityIndicator size={"large"} />
          ) : (
            <Text style={styles.submitText}>Submit</Text>
          )}
        </TouchableOpacity>
      </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      padding: 20,
    },
    headerTitle: {
      fontFamily: "outfit-medium",
      fontSize: 20,
    },
    inputContainer: {
      marginVertical: 5,
    },
    inputTextLabel: {
      marginVertical: 5,
      fontFamily: "outfit-regular",
    },
    inputText: {
      padding: 10,
      backgroundColor: Colors.WHITE,
      borderRadius: 7,
      fontFamily: "outfit-regular",
    },
    submitBtn: {
      padding: 15,
      marginVertical: 10,
      marginBottom: 50,
      backgroundColor: Colors.PRIMARY,
      borderRadius: 7,
    },
    submitText: {
      fontFamily: "outfit-medium",
      textAlign: "center",
    },
  });
  