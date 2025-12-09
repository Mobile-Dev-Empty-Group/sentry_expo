import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Test Sentry Crash</Text>
      <Button 
        title="Bấm để Crash App" 
        color="red"
        onPress={() => { 
          throw new Error("Test Sentry Error: App bị crash!"); 
        }} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold',
  }
});