import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Dimensions, ImageBackground, Alert } from 'react-native';
import LottieView from 'lottie-react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

export default function ParentSignupScreen() {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateInputs = () => {
    const newErrors = {};
    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!password.trim()) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinuePress = () => {
    if (validateInputs()) {
      console.log('Form submitted successfully');
      Alert.alert('Success', 'Form submitted successfully!');
      navigation.navigate('EmailVerification'); // Correct navigation
    } else {
      console.log('Validation failed', errors);
    }
  };

  return (
    <ImageBackground source={require('../../../assets/images/map.jpeg')} style={styles.background}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#0C4D73" />
        </TouchableOpacity>

        <View style={styles.animationContainer}>
          <LottieView source={require('../../../assets/images/parent.json')} autoPlay loop style={styles.lottie} />
        </View>

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
            placeholder="Email"
            placeholderTextColor="#717d7e"
            keyboardType="email-address"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#717d7e"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

          <TouchableOpacity onPress={handleContinuePress} style={styles.button}>
            <Text style={styles.buttonText}>SIGNUP</Text>
          </TouchableOpacity>

          <Text style={styles.loginText}>
            Already have an account?{' '}
            <Text
              style={styles.loginLink}
              onPress={() => navigation.navigate('ParentLogin')} // Ensure correct screen name
            >
              Login
            </Text>
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
}
