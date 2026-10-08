import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export default function App() {

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [feedback, setFeedback] = useState('No option selected');

  const [items, setItems] = useState([
    {label: 'Beef', value: 1},
    {label: 'Chicken', value: 2},
    {label: 'Mutton', value: 3},
    {label: 'Veg', value: 4},
    {label: 'Fish', value: 5},
  ]);

  const [mealOption, setMealOption] = useState({
    meatType: "",
    price: 0,
    prepTime: 0,
  });

  const makeSelection = () => {
    switch(value!!) {
      case 1:
        console.log('Beef selected');
        setFeedback('Beef selected');
        setMealOption({ meatType: 'Beef', price: 75, prepTime: 15 });
        break;
      case 2:
        console.log('Chicken selected');
        setFeedback('Chicken selected');
        setMealOption({ meatType: 'Chicken', price: 60, prepTime: 10 });
        break;
      case 3:
        console.log('Mutton selected');
        setFeedback('Mutton selected');
        setMealOption({ meatType: 'Mutton', price: 100, prepTime: 30 });
        break;
      case 4:
        console.log('Veg selected');
        setFeedback('Veg selected');
        setMealOption({ meatType: 'Veg', price: 50, prepTime: 10 });
        break;
      default:
        console.log('No option selected');
        setFeedback('No option selected');
        // Reset it if they somehow select nothing
        setMealOption({ meatType: "", price: 0, prepTime: 0 });
    }
  }

  return (
    <View style={styles.container}>
      <Text>Menu App</Text>
      <Text>Please select an option below:</Text>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        theme="DARK"
        placeholder="Select an option..."
      />
      <TouchableOpacity
        style={{
          backgroundColor: 'blue',
          padding: 10,
          marginTop: 20,
          borderRadius: 5,
        }}
        // Cleaned up your onPress a bit too
        onPress={makeSelection}
      >
        <Text style={{color: 'white'}}>Submit</Text>
      </TouchableOpacity>

      <Text style={{marginTop: 20}}>Selected Option: {feedback}</Text>
      <StatusBar style="auto" />

      <Text style={{marginTop: 20}}>Meal Option Details:</Text>
      {/* This will now actually update on the screen */}
      {Object.entries(mealOption).map(([key, mealValue]) => (
        <Text key={key}>{`${key}: ${mealValue}`}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});