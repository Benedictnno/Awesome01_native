/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { 
  View,SafeAreaView,Text,StyleSheet,useColorScheme,ScrollView
 } from 'react-native'
import FlatCards from './coponents/FlatCards';
import ElevatedCard from './coponents/ElevatedCard';
import FancyCard from './coponents/FancyCard';
import ActionCard from './coponents/ActionCard';
import ContactList from './coponents/ContactList';


 function App(): JSX.Element {
  // const isDarkMode = useColorScheme()==='dark'
  return (
  <SafeAreaView >
    <ScrollView>
<FlatCards/>
<ElevatedCard/>
<FancyCard/>
<ContactList/>
<ActionCard/>
    </ScrollView>
    </SafeAreaView>

  )
 }

 const styles = StyleSheet.create({
  container : {
    backgroundColor:'#3aa832'
  },
  whiteText: {
    color: '#FFFFFF',
  },
  darkText: {
    color:' #000000',
  },


 })
 export default App