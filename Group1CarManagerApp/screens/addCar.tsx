import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  Button, 
  Alert, 
  KeyboardAvoidingView, 
  ScrollView, 
  Platform 
} from 'react-native';

import { styles } from '../styles/styles';

export default function AddCarScreen({ navigation }: any) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [mileage, setMileage] = useState('');
  const [nextService, setNextService] = useState('');

  const handleSave = () => {
    // Basic validation so you don't save a blank shitbox to your garage
    if (!name.trim() || !mileage.trim() || !nextService.trim()) {
      Alert.alert('Hold Up', 'Don\'t half-arse it. Fill in the bloody name and mileage fields.');
      return;
    }

    if (isNaN(Number(mileage)) || isNaN(Number(nextService))) {
      Alert.alert('Math Error', 'Mileage and Next Service must be actual numbers, mate.');
      return;
    }

    const newCar = {
      id: Date.now().toString(), // Quick and dirty unique ID
      name,
      description,
      mileage: parseInt(mileage, 10),
      nextService: parseInt(nextService, 10),
    };

    // TODO: Actually save this to AsyncStorage or a global state manager here
    console.log('Saved this beast:', newCar);

    // Yeet the user back to the garage
    navigation.navigate('Garage', {
      id: newCar.id,
      name: newCar.name,
      description: newCar.description,
      mileage: newCar.mileage,
      nextService: newCar.nextService
    });
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Add a New Ride</Text>

        <Text style={styles.label}>Vehicle Name</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. Kawasaki KLR650"
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>Description (Optional)</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="e.g. Needs the carburettor cleaned and electricals sorted..."
          value={description}
          onChangeText={setDescription}
          multiline
          numberOfLines={3}
        />

        <Text style={styles.label}>Current Mileage (km)</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. 45000"
          value={mileage}
          onChangeText={setMileage}
          keyboardType="numeric"
        />

        <Text style={styles.label}>Next Service Due (km)</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. 50000"
          value={nextService}
          onChangeText={setNextService}
          keyboardType="numeric"
        />

        <View style={styles.buttonContainer}>
          <Button title="Save Vehicle" onPress={handleSave} color="#28a745" />
        </View>
        
        <View style={styles.cancelContainer}>
          <Button title="Cancel" onPress={() => navigation.goBack()} color="#dc3545" />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}