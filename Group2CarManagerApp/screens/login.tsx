import React, { useState } from 'react';
import { 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  Alert 
} from 'react-native';

// Import the external stylesheet. 
// The '../' tells it to go up one folder from 'screens' to find 'styles.js'.
import { styles } from '../styles/styles'; 

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === '' || password === '') {
      Alert.alert('Hold your horses', 'Please fill in both email and password before continuing.');
      return;
    }

    console.log(`Attempting to log in with: ${email}`);
    
    // Toss them over to the Garage screen
    navigation.navigate('Garage');
  };

  return (
    <View style={styles.container}>
      
      <Text style={styles.headerText}>Car Manager</Text>
      <Text style={styles.subText}>Sign in to view your garage</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        placeholderTextColor="#666"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        placeholderTextColor="#666"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      
    </View>
  );
}