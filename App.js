import {  Button, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Colors } from './common/Colors';
import { useEffect, useState } from 'react';
import { init } from './util/database';
import { Navigation } from './StackNavigator';
import { Provider } from 'react-redux'
import { store } from './redux/store';



const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


export default function App() {

  // const [dbInti ,setDBInti] = useState(false);

  // useEffect(()=>{
  //   init()
  //   .then(()=>{
  //     setDBInti(true);
  //   })
  //   .catch(()=>{
  //     setDBInti(false);
  //   })
  // },[])

  // if(!dbInti){
  //   return <Loading/>
  // }
  
  return (
      <>
      <StatusBar style='dark'/>  
        <Provider store={store}>
          <NavigationContainer >
            <Navigation/>
          </NavigationContainer>
        </Provider> 
      </>
  );
}

const styles = StyleSheet.create({
  appScreen:{
    // flex:1,
  },
    appContainer:{
      // flex:1,
      marginTop:StatusBar.currentHeight,
    },
});
