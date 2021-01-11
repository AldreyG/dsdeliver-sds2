import { useFonts, OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import Routes from './src/Routes';



export default function App() {

    let [fontsLoaded] = useFonts ({
      OpenSans_400Regular,
      OpenSans_700Bold   
    });
  
    if (!fontsLoaded) {
      return <AppLoading />;
    }
  return (
    <View style={styles.container}>
      <Routes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
});
