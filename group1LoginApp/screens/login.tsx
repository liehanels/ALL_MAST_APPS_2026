import React, { useState, useEffect, useRef } from 'react';
import { Alert, Animated, Platform, ScrollView, Text, TextInput, TouchableOpacity,
         Image, View, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { styles } from '../styles/styles';

export default function LoginScreen({ navigation }: any) {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: true,
        }).start();
    }, [fadeAnim]);

    const displayAlert = (title: string, message: string) => {
        if (Platform.OS === 'web') {
            window.alert(`${title}\n\n${message}`);
        } else {
            Alert.alert(title, message);
        }
    };

    const handleLogin = async () => {
    if (!email || !password) {
      displayAlert('Error', 'Don\'t be a chop. Please enter both your email and password.');
      return;
    }

    try {
      const savedUserString = await AsyncStorage.getItem('savedUser');

      if (savedUserString !== null) {
        const savedUser = JSON.parse(savedUserString);

        if (email === savedUser.email && password === savedUser.password) {
          displayAlert('Success', 'Logging you in...');
          setEmail('');
          setPassword('');
          navigation.navigate('Details');
        } else {
          displayAlert('Error', 'Incorrect email or password. Try again.');
        }
      } else {
        displayAlert('Error', 'No account found. Go register first.');
      }
    } catch (error) {
      displayAlert('Error', 'Something broke while trying to log you in.');
    }
  };

    const navToLogin = () => {
        navigation.navigate('Login');
    };
    
    const navToRegister = () => {
        navigation.navigate('Register');
    };

    const navToDetails = () => {
        navigation.navigate('Details');
    }

    return (
        <ImageBackground 
            source={{ uri: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85?auto=format&fit=crop&w=1920&q=80' }} 
            style={styles.backgroundImage}
            resizeMode="cover"
        >
            <ScrollView contentContainerStyle={styles.container}>
                
                {/* Standardised Ribbon without the -400 margin bullshit */}
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
                
                <Text style={styles.heading}>Login Page</Text>
                
                <Text style={styles.subheading}>Email Address</Text>
                <TextInput placeholder="Enter your email address" style={styles.textInput} value={email} onChangeText={setEmail} />
                
                <Text style={styles.subheading}>Password</Text>
                <TextInput placeholder="Enter password" secureTextEntry style={styles.textInput} value={password} onChangeText={setPassword} />
                
                {/* Actually gave you a button to click */}
                <View style={styles.actionButtonContainer}>
                    <TouchableOpacity style={{ backgroundColor: '#75ef5f', padding: 10, width: 150 }} onPress={handleLogin}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                </View>

                {/* Standardised bottom image */}
                <Image source={{ uri: 'https://www.jadeglobal.com/sites/default/files/2022-09/Getting-Started-on-React-Native.jpg' }} style={styles.bottomImage} />
            
            </ScrollView>
        </ImageBackground>
    );
}