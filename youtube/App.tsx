import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function GoogleLoginButton() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => console.log('Google button pressed!')}>
        <FontAwesome name="google" size={24} color="white" style={styles.icon} />
        <Text style={styles.text}>Sign in with Google</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#4285F4',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});