import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Dimensions, ImageBackground, Alert } from 'react-native';
import LottieView from 'lottie-react-native';
import { Ionicons } from '@expo/vector-icons'; // For the back arrow icon
import { useNavigation } from '@react-navigation/native';
const { width } = Dimensions.get('window');

export default function ChildInfo() {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [errors, setErrors] = useState({});

  const validateInputs = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = 'Name is required';
    if (!age.trim()) {
      newErrors.age = 'Age is required';
    } else if (isNaN(age) || parseInt(age) <= 0) {
      newErrors.age = 'Age must be a valid number greater than 0';
    }
    if (!gender) newErrors.gender = 'Please select a gender';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinuePress = () => {
    if (validateInputs()) {
      Alert.alert('Success', `Name: ${name}, Age: ${age}, Gender: ${gender}`);
      console.log('Form submitted:', { name, age, gender });
    }
    navigation.navigate('ChildCode');
  };

  return (
    <ImageBackground
      source={require('../../../assets/images/map.jpeg')}
      style={styles.background}
    >
      <View style={styles.container}>
        {/* Back Button with Icon */}
        {/* <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#0C4D73" />
        </TouchableOpacity> */}

        {/* Animation and Message */}
        <View style={styles.animationContainer}>
          <View style={styles.lottieContainer}>
            <LottieView
              source={require('../../../assets/images/child.json')}
              autoPlay
              loop
              style={styles.lottie}
            />
          </View>
          {/* Improved Speech Bubble */}
          <View style={styles.speechBubble}>
            <View style={styles.speechBubbleArrow} />
            <Text style={styles.speechText}>Let's do it!</Text>
          </View>
        </View>

        {/* Form with Glass Effect */}
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor="#717d7e"
            value={name}
            onChangeText={(text) => setName(text)}
          />
          {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}

          <TextInput
            style={styles.input}
            placeholder="Age"
            placeholderTextColor="#717d7e"
            keyboardType="numeric"
            value={age.toString()}
            onChangeText={(text) => setAge(text)}
          />
          {errors.age && <Text style={styles.errorText}>{errors.age}</Text>}

          <View style={styles.genderContainer}>
            <TouchableOpacity
              style={[
                styles.genderButton,
                gender === 'Boy' && styles.selectedGenderButton,
              ]}
              onPress={() => setGender('Boy')}
            >
              <Text style={styles.genderText}>Boy</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.genderButton,
                gender === 'Girl' && styles.selectedGenderButton,
              ]}
              onPress={() => setGender('Girl')}
            >
              <Text style={styles.genderText}>Girl</Text>
            </TouchableOpacity>
          </View>
          {errors.gender && <Text style={styles.errorText}>{errors.gender}</Text>}

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
    justifyContent: 'space-between',
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
     marginTop: 40,
  },
  lottieContainer: {
    width: width * 0.5,
    height: width * 0.6,
  },
  lottie: {
    width: '100%',
    height: '100%',
  },
  speechBubble: {
    marginTop: -140,
    width: 150,
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
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0C4D73',
    textAlign: 'center',
  },
  formContainer: {
    width: '90%',
    maxWidth: 300,
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
    width: '100%',
    height: 45,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
    fontSize: 14,
    backgroundColor: '#fff',
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 15,
  },
  genderButton: {
    width: '48%',
    height: 45,
    backgroundColor: '#b3b6b7',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedGenderButton: {
    backgroundColor: '#ff6600',
  },
  genderText: {
    fontSize: 18,
    color: '#fff',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#ff6600',
    width: '100%',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
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
