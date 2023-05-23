import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import HelloWorld from './HelloWorld'

export default function App() {
  return (
    <HelloWorld text="oh yeah">
    </HelloWorld>
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
