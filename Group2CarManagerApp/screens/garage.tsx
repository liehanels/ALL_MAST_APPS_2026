import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Button, StyleSheet } from 'react-native';

import { styles } from '../styles/styles';

// Some dummy data to populate the garage so it isn't completely bare.
const MOCK_CARS = [
  { 
    id: '1', 
    name: 'Mahindra XUV300', 
    description: 'Petrol daily driver. Surprisingly decent on fuel and gets the job done.', 
    mileage: 45000, 
    nextService: 50000 
  },
  { 
    id: '2', 
    name: '2010 Chevrolet Spark', 
    description: 'Tiny little city bug. Fits in your pocket.', 
    mileage: 120000, 
    nextService: 125000 
  },
  { 
    id: '3', 
    name: '2014 KTM Duke 200', 
    description: 'Two-wheeled menace. Needs the chain lubed and standard maintenance.', 
    mileage: 32000, 
    nextService: 35000 
  },
];

export default function GarageScreen({ navigation }: any) {

  const handleCarPress = (car: any) => {
    // We will navigate to a 'CarDetails' screen eventually and pass the car object.
    // For now, it just prints to the console so you know the tap actually works.
    console.log('Tapped on:', car.name);
    // navigation.navigate('CarDetails', { carData: car });
  };

  const renderCarItem = ({ item }: { item: any }) => (
    <TouchableOpacity 
      style={styles.card} 
      onPress={() => handleCarPress(item)}
      activeOpacity={0.7}
    >
      <Text style={styles.carName}>{item.name}</Text>
      <Text style={styles.description}>{item.description}</Text>
      
      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statLabel}>Current Mileage</Text>
          <Text style={styles.statValue}>{item.mileage.toLocaleString()} km</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statLabel}>Next Service</Text>
          <Text style={styles.statValue}>{item.nextService.toLocaleString()} km</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Button 
          title="Add a Car" 
          onPress={() => navigation.navigate('Add a Car')} 
          color="#007BFF" 
        />
      </View>

      <FlatList
        data={MOCK_CARS}
        keyExtractor={(item) => item.id}
        renderItem={renderCarItem}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={<Text style={styles.emptyText}>Your garage is empty. Buy some wheels.</Text>}
      />
    </View>
  );
}