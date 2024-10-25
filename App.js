import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigation from './src/navigations/StackNavigation';
// import { useFonts } from 'expo-font'

const App = () => {
  //  const [fontsLoaded] = useFonts({
  //    "Roboto-Regular": require("./../assets/fonts/Roboto-Regular.ttf"),
  //    "SpaceMono-Regular": require("./../assets/fonts/SpaceMono-Regular.ttf"),
  //    "Montserrat-Regular": require("../assets/fonts/Montserrat-Regular.ttf"),
  //    "Montserrat-Bold": require("../assets/fonts/Montserrat-Bold.ttf"),
  //  });

  return (
    <NavigationContainer independent={true}>
      <StackNavigation />
    </NavigationContainer>
  );
}

export default App
