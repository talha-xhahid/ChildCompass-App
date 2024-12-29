import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Dimensions, ImageBackground } from 'react-native';
import LottieView from 'lottie-react-native';
// import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function ParentCode() {
  // const router = useRouter(); 
  const [code, setCode] = useState(''); // State for the code from the database

  useEffect(() => {
    // Simulate fetching the code from the database
    const fetchCodeFromDB = async () => {
      // Replace with actual database call
      const fetchedCode = '1234'; // Example code
      setCode(fetchedCode);
    };

    fetchCodeFromDB();
  }, []);

  const handleContinuePress = () => {
    // Handle form submission logic
    if (code) {
      console.log('Code submitted:', code);
      alert(`Code submitted: ${code}`);
    } else {
      alert('Code is not available!');
    }
  };

  return (
    <ImageBackground
      source={require('../../../assets/images/map.jpeg')}
      style={styles.background}
    >
      <View style={styles.container}>
        {/* Back Button */}
        {/* <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#0C4D73" />
        </TouchableOpacity> */}

        {/* Animation */}
        <View style={styles.animationContainer}>
          <View style={styles.lottieContainer}>
            <LottieView
              source={require('../../../assets/images/child.json')}
              autoPlay
              loop
              style={styles.lottie}
            />
          </View>
          <View style={styles.speechBubble}>
            <View style={styles.speechBubbleArrow} />
            <Text style={styles.speechText}>Almost Done...</Text>
          </View>
        </View>

        {/* Form Container */}
        <View style={styles.formContainer}>
          <Text style={styles.instructionText}>
            Code to build connection with your parent.
          </Text>

          {/* Single Box for the Code */}
          <View style={styles.codeBox}>
            <Text style={styles.codeText}>{code}</Text>
          </View>

          {/* Continue Button */}
          <TouchableOpacity onPress={handleContinuePress} style={styles.button}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 20,
    elevation: 5, // Adds shadow for a floating effect
  },
  animationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  lottieContainer: {
    width: width * 0.6,
    height: width * 0.8,
  },
  lottie: {
    width: '100%',
    height: '100%',
  },
  speechBubble: {
    marginTop: -140,
    width: 140,
    marginLeft: -30,
    backgroundColor: '#90EE90', // Light green bubble
    padding: 15,
    borderRadius: 20,
    position: 'relative',
  },
  speechBubbleArrow: {
    position: 'absolute',
    bottom: -10,
    left: 20,
    width: 0,
    height: 0,
    borderTopWidth: 10,
    borderTopColor: '#90EE90',
    borderLeftWidth: 10,
    borderLeftColor: 'transparent',
    borderRightWidth: 10,
    borderRightColor: 'transparent',
  },
  speechText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#0C4D73',
    textAlign: 'center',
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

  instructionText: {
    fontSize: 15,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
    fontStyle:'italic'
  },
  codeBox: {
    width: '80%',
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  codeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#ff6600',
    width: '100%',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
});
