import React, { useEffect, useState, useRef } from 'react';
import { Alert, Animated, Platform, ScrollView, Text, TouchableOpacity, Image, View, ImageBackground, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { styles } from '../styles/styles';

interface UserProfile {
    firstName: string;
    lastName: string;
    email: string;
    contactNumber: string;
    gender: string;
}

export default function DetailsScreen({ navigation }: any) {
    const [userData, setUserData] = useState<UserProfile | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                // Simulate a slight network delay just so your loading spinner looks cool
                setTimeout(async () => {
                    const savedUserString = await AsyncStorage.getItem('savedUser');
                    
                    if (savedUserString !== null) {
                        const savedUser = JSON.parse(savedUserString);
                        setUserData(savedUser);
                    }
                    
                    setIsLoading(false);

                    Animated.timing(fadeAnim, {
                        toValue: 1,
                        duration: 2000,
                        useNativeDriver: true,
                    }).start();
                }, 1000);
            } catch (error) {
                console.error("Failed to fetch user data", error);
                setIsLoading(false);
            }
        };

        fetchUserData();
    }, [fadeAnim]);

    const navToLogin = () => {
        navigation.navigate('Login');
    };
    
    const navToRegister = () => {
        navigation.navigate('Register');
    };

    const handleLogout = () => {
        if (Platform.OS === 'web') {
            window.alert('Logging out...');
        } else {
            Alert.alert('Logout', 'Logging you out, mate...');
        }
        navigation.navigate('Login');
    };

    return (
        <ImageBackground 
            source={{ uri: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85?auto=format&fit=crop&w=1920&q=80' }} 
            style={styles.backgroundImage}
            resizeMode="cover"
        >
            <ScrollView contentContainerStyle={styles.container}>
                
                <View style={styles.ribbonContainer}>
                    <Image source={require('../assets/favicon.png')} style={styles.ribbonIcon} />
                    <TouchableOpacity style={{ padding: 10, marginRight: 50 }} onPress={navToRegister}>
                        <Text style={styles.ribbonButton}>Register</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ padding: 10 }} onPress={navToLogin}>
                        <Text style={styles.ribbonButton}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ padding: 10, marginLeft: 'auto', marginRight: 20 }} onPress={handleLogout}>
                        <Text style={[styles.ribbonButton, { color: '#cc1313' }]}>Logout</Text>
                    </TouchableOpacity>
                </View>

                {isLoading ? (
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 100 }}>
                        <ActivityIndicator size="large" color="#1e90ff" />
                        <Text style={{ marginTop: 10, fontSize: 18, fontWeight: 'bold' }}>Fetching your data...</Text>
                    </View>
                ) : (
                    <>
                        <Animated.Image source={require('../assets/favicon.png')} style={[{ width: 100, height: 100, marginTop: 20 }, { opacity: fadeAnim }]} />
                        
                        <Text style={styles.heading}>User Profile</Text>
                        
                        <Text style={styles.subheading}>First Name</Text>
                        <View style={[styles.textInput, { justifyContent: 'center' }]}>
                            <Text style={{ textAlign: 'center', color: '#000', fontSize: 16 }}>{userData?.firstName}</Text>
                        </View>

                        <Text style={styles.subheading}>Last Name</Text>
                        <View style={[styles.textInput, { justifyContent: 'center' }]}>
                            <Text style={{ textAlign: 'center', color: '#000', fontSize: 16 }}>{userData?.lastName}</Text>
                        </View>

                        <Text style={styles.subheading}>Email Address</Text>
                        <View style={[styles.textInput, { justifyContent: 'center' }]}>
                            <Text style={{ textAlign: 'center', color: '#000', fontSize: 16 }}>{userData?.email}</Text>
                        </View>

                        <Text style={styles.subheading}>Contact Number</Text>
                        <View style={[styles.textInput, { justifyContent: 'center' }]}>
                            <Text style={{ textAlign: 'center', color: '#000', fontSize: 16 }}>{userData?.contactNumber}</Text>
                        </View>

                        <Text style={styles.subheading}>Gender</Text>
                        <View style={[styles.textInput, { justifyContent: 'center', marginBottom: 20 }]}>
                            <Text style={{ textAlign: 'center', color: '#000', fontSize: 16 }}>{userData?.gender}</Text>
                        </View>

                        <View style={styles.actionButtonContainer}>
                            <TouchableOpacity 
                                style={{ backgroundColor: '#1e90ff', padding: 10, width: 150, borderRadius: 8 }} 
                                onPress={() => Alert.alert('Easy there', 'We haven\'t built the edit functionality yet.')}
                            >
                                <Text style={styles.buttonText}>Edit Details</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}

                <Image source={{ uri: 'https://www.jadeglobal.com/sites/default/files/2022-09/Getting-Started-on-React-Native.jpg' }} style={styles.bottomImage} />
            
            </ScrollView>
        </ImageBackground>
    );
}