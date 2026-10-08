import React, { useState, useEffect, useRef } from 'react';
import { Alert, Animated, Platform, ScrollView, Text, TextInput, TouchableOpacity,
         Image, View, ImageBackground } from 'react-native';

// THIS CODE IS NOT IN OUR SYLLABUS, BUT IT IS A GOOD IDEA TO USE IT FOR STORING DATA LOCALLY
import AsyncStorage from '@react-native-async-storage/async-storage';

// We import the styles from the styles.ts file to keep our code clean and maintainable.
// This allows us to define all our styles in one place and reuse them across different
// components.
import { styles } from '../styles/styles';

export default function RegistrationScreen({ navigation }: any) {

  // Our gender type definition allows us to restrict the gender state to only the
  // specified values, ensuring type safety and preventing invalid data from being set.
  type Gender = 'Male' | 'Female' | 'Other';

  // We define state variables for each input field in the registration form.
  // These states will hold the current values of the form fields and will be updated as
  // the user types.
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [contactNumber, setContactNumber] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [gender, setGender] = useState<Gender | null>(null);

  
    // We use a ref to create an animated value for the fade-in effect of the logo.
  const fadeAnim = useRef(new Animated.Value(0)).current;

  // We use the useEffect hook to trigger the fade-in animation when the component mounts.
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  // The clearForm function resets all the form fields to their initial empty state.
  const clearForm = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setContactNumber('');
    setPassword('');
    setConfirmPassword('');
    setGender(null);
  };

  // The emptyFieldCheck function checks if all required fields are filled and if the password
  // and confirm password fields match. It returns true if all checks pass, otherwise false.
  const emptyFieldCheck = () => {
    if (!firstName || !lastName || !email || !contactNumber || !password || !confirmPassword || !gender) {
      displayAlert('Incomplete Form', 'Please fill in all the fields before continuing.');
      return false;
    }
    if (!checkPasswordMatch()) return false;
    
    return true;
  };

  // The checkPasswordMatch function checks if the password and confirm password fields match
  // and if the password meets the minimum length requirement.
  // It returns true if both checks pass, otherwise false.
  const checkPasswordMatch = () => {
    if (password.length <= 5) {
      setPassword('');
      setConfirmPassword('');
      displayAlert('Password Too Short', 'Your password must be at least 6 characters long.');
      return false;
    }

    if (password !== confirmPassword) {
      setPassword('');
      setConfirmPassword('');
      displayAlert('Password Mismatch', 'The password and confirm password fields do not match. Please re-enter them.');
      return false;
    }
    return true;
  };

  // The handleRegister function is called when the user submits the registration form.
  // It first checks if all required fields are filled and if the passwords match.
  // If all checks pass, it saves the user data to AsyncStorage and navigates to the
  // Login screen. AsyncStorage is NOT in the syllabus, but here it is anyway
  const handleRegister = async () => {
    if(!emptyFieldCheck()) return;
    try {
      const userData = {
        firstName,
        lastName,
        email,
        contactNumber,
        password, // Saving passwords locally is terrible, but we roll with it for now
        gender
      };

      //THIS CODE IS NOT IN OUR SYLLABUS, BUT IT IS A GOOD IDEA TO USE IT FOR STORING DATA LOCALLY
      await AsyncStorage.setItem('savedUser', JSON.stringify(userData));

      displayAlert('Registration Successful', `Welcome, ${firstName} ${lastName}!`);
      
      navigation.navigate('Login');
      
    } catch (error) {
      displayAlert('Error', 'Something went wrong while saving your data.');
    }
  };

  // The displayAlert function shows an alert dialog with the given title and message.
  // It handles both web and mobile platforms by using window.alert for web and Alert.alert
  // for mobile.
  const displayAlert = (title: string, message: string) => {
    if (Platform.OS === 'web') {
      window.alert(`${title}\n\n${message}`);
    } else {
      Alert.alert(title, message);
    }
  };

  // Navigation functions to switch between screens. These functions use the navigation prop
  // provided by React Navigation to navigate to the specified screens.s
  const navToLogin = () => {
    navigation.navigate('Login');
  };
  
  const navToRegister = () => {
    navigation.navigate('Register');
  };

  // The return statement defines the JSX structure of the registration screen.
  // It includes an ImageBackground for the background image, a ScrollView to allow scrolling,
  // and various input fields for user registration. The form includes fields for first name,
  // last name, email, contact number, password, confirm password, and gender selection.
  // There are also buttons for clearing the form and submitting the registration.
  // The logo fades in using the Animated API.
  return (
    <ImageBackground 
      source={{ uri: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85?auto=format&fit=crop&w=1920&q=80' }} 
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        
        {/* Matches Login Ribbon */}
        <View style={styles.ribbonContainer}>
          <Image source={require('../assets/favicon.png')} style={styles.ribbonIcon} />
          <TouchableOpacity style={{ padding: 10, marginRight: 50 }} onPress={navToRegister}>
            <Text style={styles.ribbonButton}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ padding: 10 }} onPress={navToLogin}>
            <Text style={styles.ribbonButton}>Login</Text>
          </TouchableOpacity>
        </View>

        <Animated.Image source={require('../assets/favicon.png')} style={[{ width: 100, height: 100, marginTop: 20 }, { opacity: fadeAnim }]} />
        <Text style={styles.heading}>Registration Form</Text>
        
        <Text style={styles.subheading}>First Name</Text>
        <TextInput placeholder="Enter your first name" style={styles.textInput} value={firstName} onChangeText={setFirstName} />
        
        <Text style={styles.subheading}>Last Name</Text>
        <TextInput placeholder="Enter your last name" style={styles.textInput} value={lastName} onChangeText={setLastName} />
        
        <Text style={styles.subheading}>Email Address</Text>
        <TextInput placeholder="Enter your email" style={styles.textInput} value={email} onChangeText={setEmail} />
        
        <Text style={styles.subheading}>Contact number</Text>
        <TextInput placeholder="Enter your contact number" style={styles.textInput} value={contactNumber} onChangeText={setContactNumber} />
        
        <Text style={styles.subheading}>Password</Text>
        <TextInput placeholder="Enter password" secureTextEntry={true} style={styles.textInput} value={password} onChangeText={setPassword} />
        
        <Text style={styles.subheading}>Confirm Password</Text>
        <TextInput placeholder="Confirm password" secureTextEntry={true} style={styles.textInput} value={confirmPassword} onChangeText={setConfirmPassword} />
        
        <Text style={styles.subheading}>Gender</Text>
        <View style={{ flexDirection: 'row', marginBottom: 20 }}>
          {['Male', 'Female', 'Other'].map((g) => (
            <TouchableOpacity 
              key={g}
              style={[styles.genderButton, gender === g && styles.genderButtonSelected]} 
              onPress={() => setGender(g as Gender)}>
              <Text style={styles.buttonText}>{g}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.actionButtonContainer}>
          <TouchableOpacity style={{ backgroundColor: '#ed6b6b', padding: 10, marginRight: 15 }} onPress={clearForm}>
            <Text style={styles.buttonText}>Clear form</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: '#75ef5f', padding: 10 }} onPress={handleRegister}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
        
        {/* Standardised bottom image */}
        <Image source={{ uri: 'https://www.jadeglobal.com/sites/default/files/2022-09/Getting-Started-on-React-Native.jpg' }} style={styles.bottomImage} />
      
      </ScrollView>
    </ImageBackground>
  );
}