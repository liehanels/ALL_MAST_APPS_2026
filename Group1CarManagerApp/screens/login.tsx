import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, KeyboardAvoidingView, Platform } from 'react-native';

import { styles } from '../styles/styles';

// The navigation prop is automatically injected by the Stack.Screen in App.tsx
export default function LoginScreen({ navigation }: any) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Basic validation to prevent submitting absolute nothingness
    if (!username.trim() || !password.trim()) {
      Alert.alert('Hold your horses', 'Fill in the damn form before clicking submit.');
      return;
    }

    // A highly secure, military-grade validation check
    if (username.toLowerCase() === 'admin' && password === '1234') {
      setUsername('');
      setPassword('');
      
      // Yeet the user to the Garage screen (must match the name in App.tsx exactly)
      navigation.navigate('Garage');
    } else {
      Alert.alert('Access Denied', 'Wrong credentials, mate. Try again or piss off.');
    }
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.formContainer}>
        <Text style={styles.title}>Welcome to the Shitshow</Text>
        <Text style={styles.subtitle}>Please log in to manage your garage</Text>

        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
          autoCorrect={false}
        />
        
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <View style={styles.buttonContainer}>
          <Button title="Login" onPress={handleLogin} color="#ff6600" />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}