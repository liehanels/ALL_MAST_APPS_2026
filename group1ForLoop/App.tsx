import React, { JSX, useState } from 'react'; 

import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native'; 

 

export default function App() { 

const userProfile = { 

    name: 'David', 

    age: 22, 

    email: 'david@gmail.com', 

    location: 'Cape Town', 

  }; 

 

  const profileItems: JSX.Element[] = []; 

 

  // Use for...in loop to extract keys and values from the object 

  for (let key in userProfile) { 

    profileItems.push( 

      <Text key={key} style={styles.item}> 

        {key.charAt(0).toUpperCase() + key.slice(1)}: {userProfile[key as keyof typeof userProfile]} 

      </Text> 

    ); 

  } 

 

  return ( 

    <ScrollView contentContainerStyle={styles.container}> 

      <Text style={styles.title}>User Profile (using for...in loop)</Text> 

      {profileItems} 

    </ScrollView> 

  ); 

}; 

 

const styles = StyleSheet.create({ 

  container: { 

    padding: 20, 

    alignItems: 'flex-start', 

  }, 

  title: { 

    fontSize: 20, 

    fontWeight: 'bold', 

    marginBottom: 20, 

  }, 

  item: { 

    fontSize: 16, 

    marginBottom: 8, 

  }, 

}); 