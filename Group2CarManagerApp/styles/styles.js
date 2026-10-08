import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // ==========================
  // SHARED STYLES
  // ==========================
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', 
  },
  // We use this for forms (Login and Add Car) to centre things
  centeredContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5', 
    alignItems: 'center', 
    justifyContent: 'center', 
    padding: 20,
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 15,
    fontSize: 16,
  },

  // ==========================
  // LOGIN SCREEN STYLES
  // ==========================
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 40,
  },
  button: {
    width: '100%',
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center', 
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  // ==========================
  // GARAGE SCREEN STYLES
  // ==========================
  header: {
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    // Gives a slight shadow on iOS/Android to separate it from the list
    elevation: 3, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  listContainer: {
    padding: 15,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#999',
    marginTop: 50,
    fontStyle: 'italic',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  carName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
  },
  statsContainer: {
    flexDirection: 'row', // Puts the two stat boxes side-by-side
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 10,
  },
  statBox: {
    flex: 1,
    alignItems: 'center', // Centres the text inside the half-box
  },
  statLabel: {
    fontSize: 12,
    color: '#888',
    textTransform: 'uppercase',
    marginBottom: 3,
  },
  statValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007bff',
  },

  // ==========================
  // ADD CAR SCREEN STYLES
  // ==========================
  scrollContainer: {
    flexGrow: 1, // Ensures the scroll view takes up the whole screen if content is short
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 5,
    alignSelf: 'flex-start',
  },
  textArea: {
    height: 100, // Makes the box taller for descriptions
    textAlignVertical: 'top', // Prevents Android from centring the text vertically in multiline inputs
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 10,
  },
  cancelContainer: {
    marginBottom: 30, // Extra space at the bottom for scrolling past the keyboard
  },
});