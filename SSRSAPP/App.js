import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
} from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Logo from './assets/img/brand/512px-COMSATS_new_logo.jpg';
import AboutScreen from './screens/AboutScreen';
import HomeScreen from './screens/HomeScreen';
class App extends React.Component{
  render(){
    return(
      <App2/>
    )
  }
}

const CustomDrawerContentComponent= (props)=>(
  <View>
    <SafeAreaView>
      <View>
       <Image source={Logo} style={{width:60,height:60}}/>
       <Text>
         SSRS
       </Text>
      </View>
      <View>
        <DrawerItems {...props}/>
      </View>
    </SafeAreaView>
  </View>
)

const DrawerNavigator= createDrawerNavigator({
  Home:{
    screen:HomeScreen,
    navigationOptions:{
      drawerIcon:(
        <Icon name="home" size={24} color="#cc5500"/>
      )
    }
  },
  About:{
    screen:AboutScreen,
    navigationOptions:{
      drawerIcon:(
        <Icon name="info-circle" size={24} color="#cc5500"/>
      )
    }
  },
},{
  initialRouteName:'Home',
  contentComponent:CustomDrawerContentComponent,
  drawerPosition:'left',
  drawerOpenRoute:'DrawerOpen',
  drawerCloseRoute:'DrawerClose',
  DrawerToggelRoute:'DrawerToggel'
});

const App2 = createAppContainer(DrawerNavigator);
export default App;
