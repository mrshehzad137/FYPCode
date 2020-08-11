import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Logins from '../src/Student/Login';
import Loginf from '../src/Faculty/Login';
import Main from '../src/Main';
import SplashScreen from '../src/SplashScreen';
import StudentPortal from '../src/Student/StudentPortal';
import FacultyPortal from '../src/Faculty/FacultyPortal';
import AsyncStorage from '@react-native-community/async-storage';

const Stack = createStackNavigator();

export default class MyStack extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      token:'nothing',
      type:'nothing',
      isLoading:true,
    };
  };

  

  componentDidMount(){
    getdata= async(key)=>{
      const data=await AsyncStorage.getItem(key);
      console.log(data);
      if(key==='Token'){
        this.setState({token:data});
      }else if(key==='UserType'){
        this.setState({type:data});
      }
   }
    getdata('Token');
    getdata('UserType');
   this.setState({isLoading:false})
  }
  

  render(){

  return (
    <Stack.Navigator>
    {this.state.isLoading?<>
      <Stack.Screen 
    name="SplashScreen" 
    component={SplashScreen} 
    options={{ title: '' }}
  /> 
    </>:
    <>
    <Stack.Screen 
    name="Main" 
    component={Main} 
    options={{ title: 'SSRSAPP' }}
  />       
  <Stack.Screen 
    name="Logins" 
    component={Logins} 
    options={
      {title: 'Student Login'}
    }
  />
  <Stack.Screen 
   name="Loginf" 
   component={Loginf} 
   options={
     { title: 'Faculty Login' }
   }
  />
    <Stack.Screen 
      name="StudentPortal" 
      component={StudentPortal} 
      options={
        { title: 'Student Dashboard' }
      }
   />
    <Stack.Screen 
      name="FacultyPortal" 
      component={FacultyPortal} 
      options={
        { title: 'Faculty Dashboard' },
        {headerLeft: null} 
      }/>
    </>
    }
      
      

    </Stack.Navigator>
  );
  }
}
