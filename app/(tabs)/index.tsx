import { useFocusEffect } from 'expo-router';
import { useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  useFocusEffect(
    useCallback(() => {
      async function fetchApiRoute() {
        const response = await fetch('/hash');
        const data = await response.json();
        console.log(data);
      }

      fetchApiRoute().catch((error) => console.error(error));

      return () => {
        console.log('HomeScreen unfocused');
      };
    }, []),
  );

  return (
    <View style={styles.view}>
      <Text>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});
