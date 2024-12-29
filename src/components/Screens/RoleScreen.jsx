import React from 'react';
import { Image, StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

// Get device dimensions
const { width, height } = Dimensions.get('window');

export default function RoleScreen(props) {
  const navigation = useNavigation();

  const handleChildPress = () => {
    navigation.navigate('ChildInfo');
    console.log('Child button pressed');  
  };

  const handleParentPress = () => {
    navigation.navigate('ParentSignup');
    console.log('Parent button pressed');
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.headerTitle}>
          <Text style={styles.title}>CHILD COMPASS</Text>
          <Image
            source={require('../../../assets/images/icon.png')} // Replace with your logo path
            style={styles.logo}
          />
        </View>
        <Image
          source={require('../../../assets/images/main-img.jpeg')}
          style={styles.headerImage}
        />
      </View>

      {/* Animation Section */}
      <View style={styles.animationContainer}>
        {/* Child Animation */}
        <View style={styles.animationWrapper}>
          <LottieView
            source={require('../../../assets/images/child.json')}
            autoPlay
            loop
            style={styles.lottie}
          />
        </View>

        {/* Parent Animation */}
        <View style={styles.animationWrapper}>
          <LottieView
            source={require('../../../assets/images/parent.json')}
            autoPlay
            loop
            style={styles.lottie}
          />
        </View>
      </View>

      {/* Button Section */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleChildPress} style={styles.button}>
          <Text style={styles.buttonText}>I AM CHILD</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleParentPress} style={styles.button}>
          <Text style={styles.buttonText}>I AM PARENT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    alignItems: 'center',
    marginVertical: height * 0.1, // Adjusting for different screen sizes
  },
  headerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 30, 
    fontWeight: 'bold',
    color: '#0C4D73',
  },
  logo: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginLeft: 6,
  },
  headerImage: {
    width: width * 0.92, // Make the image width responsive
    height: height * 0.3, // Make the height responsive
    marginTop: 10,
  },
  animationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    // marginVertical: 10,
  },
  animationWrapper: {
    width: width * 0.4, // Adjusting based on screen size
    height: height * 0.25, // Adjusting based on screen size
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottie: {
    width: '100%', // Make animation scale with its container
    height: '100%', // Keep aspect ratio consistent
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    position: 'relative', // Avoid absolute positioning
    bottom: 0,
    width: '100%',
    backgroundColor: '#ffffff',
  },
  button: {
    backgroundColor: '#ff6600',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18, 
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
