import React, { useState } from "react";
import {StyleSheet,Text,TextInput,TouchableOpacity,View,Dimensions,ImageBackground,Alert,} from "react-native";
import LottieView from "lottie-react-native";

import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

export default function Login() {


  // Input states (for demonstration, not fully implemented)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginPress = () => {
    // Handle login logic
    Alert.alert("Login", `Email: ${email}, Password: ${password}`);
  };

  return (
    <ImageBackground
      source={require("../../../assets/images/map.jpeg")}
      style={styles.background}
    >
      <View style={styles.container}>
        {/* <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={24} color="#0C4D73" />
        </TouchableOpacity> */}

        {/* Animation */}
        <View style={styles.animationContainer}>
          <View style={styles.lottieContainer}>
            <LottieView
              source={require("../../../assets/images/parent.json")}
              autoPlay
              loop
              style={styles.lottie}
            />
          </View>
          <View style={styles.speechBubble}>
            <View style={styles.speechBubbleArrow} />
            <Text style={styles.speechText}>Welcome Back!</Text>
          </View>
        </View>

        {/* Login Form */}
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#717d7e"
            keyboardType="email-address"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#717d7e"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />

          <TouchableOpacity onPress={handleLoginPress} style={styles.button}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>

          <Text style={styles.loginText}>
            Don't have an account?{" "}
            <Text
              style={styles.loginLink}
              onPress={() => navigation.navigate("ParentSignup")} // Navigate to signup page
            >
              Register
            </Text>
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 20,
    elevation: 5, // Adds shadow for a floating effect
  },
  animationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  lottieContainer: {
    width: width * 0.6,
    height: width * 0.8,
  },
  lottie: {
    width: "100%",
    height: "100%",
  },
  speechBubble: {
    marginTop: -140,
    width: 150,
    marginLeft: -30,
    backgroundColor: "#90EE90", // Light green bubble
    padding: 15,
    borderRadius: 20,
    position: "relative",
  },
  speechBubbleArrow: {
    position: "absolute",
    bottom: -10,
    left: 20,
    width: 0,
    height: 0,
    borderTopWidth: 10,
    borderTopColor: "#90EE90",
    borderLeftWidth: 10,
    borderLeftColor: "transparent",
    borderRightWidth: 10,
    borderRightColor: "transparent",
  },
  speechText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0C4D73",
    textAlign: "center",
  },
  formContainer: {
    width: '90%',
    maxWidth: 360,
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Transparent white background
    shadowColor: '#000', // Subtle shadow for 3D effect
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)', // Border for frosted effect
    backdropFilter: 'blur(10px)', // Creates the blur effect (Web only, use `BlurView` for native)
    overflow: 'hidden', // Prevents content from overflowing container edges
  },

  input: {
    width: "100%",
    height: 45,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
    fontSize: 14,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#ff6600",
    width: "100%",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  loginText: {
    marginTop: 15,
    fontSize: 13,
    color: "#333",
  },
  loginLink: {
    color: "#0C4D73",
    fontWeight: "bold",
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },
});
