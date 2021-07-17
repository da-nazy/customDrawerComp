import React,{useWindowDimensions} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// npm install @react-navigation/drawer
import { createDrawerNavigator,DrawerContentScrollView } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

function CustomDrawerContent(props){
  return(
  <DrawerContentScrollView {...props}>
    <View style={{borderWidth:1,margin:5}}>
     <TouchableOpacity style={{borderWidth:1,width:'25%',height:30,borderRadius:5,margin:5,justifyContent:'center'}} onPress={()=>{
       props.navigation.navigate('Screen A');
     }}><Text style={{textAlign:'center'}}>Screen A</Text></TouchableOpacity>
        <TouchableOpacity style={{borderWidth:1,width:'25%',height:30,borderRadius:5,margin:5,justifyContent:'center'}} onPress={()=>{
       props.navigation.navigate('Screen B');
     }}><Text style={{textAlign:'center'}}>Screen B</Text></TouchableOpacity>
       <TouchableOpacity style={{borderWidth:1,width:'25%',height:30,borderRadius:5,margin:5,justifyContent:'center'}} onPress={()=>{
       props.navigation.navigate('Screen C');
     }}><Text style={{textAlign:'center'}}>Screen C</Text></TouchableOpacity>
    </View>
    
    </DrawerContentScrollView>
    )

}
function ScreenA() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen A</Text>
    </View>
  );
}
function ScreenB() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen B</Text>
    </View>
  );
}
function ScreenC() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen C</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App({ navigation }) {
  return (
    <NavigationContainer>
      {/** remove drawerContet for default layout */}
      <Drawer.Navigator initialRouteName='Screen A'  drawerContent={(props) => <CustomDrawerContent {...props} />}>
     
        <Drawer.Screen name='Screen A' component={ScreenA} />
        <Drawer.Screen name='Screen B' component={ScreenB} />
        <Drawer.Screen name='Screen C' component={ScreenC} />
      </Drawer.Navigator>
    </NavigationContainer>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});