import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export default function App() {

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [feedback, setFeedback] = useState('No option selected');

  const [items, setItems] = useState([
    {label: 'Beef', value: 'beef'},
    {label: 'Chicken', value: 'chicken'},
    {label: 'Mutton', value: 'mutton'},
    {label: 'Veg', value: 'veg'},
  ]);

  const orderItem = {
    meatType: "",
    price: 0,
    prepTime: 0,
  }

  const makeSelection = () => {
    switch(value!!) {
      case 'beef':
        console.log('Beef selected');
        setFeedback('Beef selected');

        orderItem.meatType = 'Beef';
        orderItem.price = 75;
        orderItem.prepTime = 15;
        break;
      case 'chicken':
        console.log('Chicken selected');
        setFeedback('Chicken selected');

        orderItem.meatType = 'Chicken';
        orderItem.price = 65;
        orderItem.prepTime = 20;
        break;
      case 'mutton':
        console.log('Mutton selected');
        setFeedback('Mutton selected');

        orderItem.meatType = 'Mutton';
        orderItem.price = 100;
        orderItem.prepTime = 30;
        break;
      case 'veg':
        console.log('Veg selected');
        setFeedback('Veg selected');

        orderItem.meatType = 'Veg';
        orderItem.price = 50;
        orderItem.prepTime = 10;
        break;
      default:
        console.log('No option selected');
        setFeedback('No option selected');
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
        onPress={() => {makeSelection()}}
      >
        <Text style={{color: 'white'}}>Submit</Text>
      </TouchableOpacity>

      <Text style={{marginTop: 20}}>Selected Option: {feedback}</Text>
      <StatusBar style="auto" />
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
