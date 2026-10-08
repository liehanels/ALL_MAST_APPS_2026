import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  ribbonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#a1a0a0',
    marginBottom: 20,
    width: '100%',
    justifyContent: 'flex-start',
    paddingVertical: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
  },
  subheading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#040303',
    backgroundColor: '#ccc',
    padding: 10,
    marginBottom: 5,
    width: '60%',
    textAlign: 'center',
  },
  genderButton: {
    marginRight: 10,
    paddingVertical: 8,
    paddingHorizontal: 15,
    backgroundColor: '#ccc',
    borderWidth: 2,
    borderColor: 'transparent',
    borderRadius: 8,
  },
  genderButtonSelected: {
    borderColor: '#040303',
    backgroundColor: '#8c8c8c',
  },
  ribbonButton: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  ribbonIcon: {
    width: 45,
    height: 45,
    marginRight: 50,
    marginLeft: 10,
  },
  actionButtonContainer: {
    flexDirection: 'row', 
    marginBottom: 20, 
    marginTop: 20,
  },
  bottomImage: {
    width: '100%',
    height: 150,
    marginTop: 0,
  }
});