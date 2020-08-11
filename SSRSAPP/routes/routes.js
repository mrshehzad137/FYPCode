import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Logins from '../src/Student/Login';
import Loginf from '../src/Faculty/Login';
import Main from '../src/Main';
import Decsion from '../src/Faculty/Desision';
import Presentation from '../src/Faculty/Presentation';
import RComments from '../src/Faculty/ReviewComments';
import RTask from '../src/Faculty/Reviewtask';
import SynopsisStatus from '../src/Faculty/SynopsisStatus';
import SubmitTask from '../src/Faculty/TaskSubmit';
import SplashScreen from '../src/SplashScreen';
import StudentPortal from '../src/Student/StudentPortal';
import FacultyPortal from '../src/Faculty/FacultyPortal';
import SSynopsisStatus from '../src/Student/SynopsisStatus';
import SPresentation from '../src/Student/Presentation';
import SDecsion from '../src/Student/Desision';
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
        { title: 'Student Dashboard' },
        {headerLeft: null}
      }
   />
   <Stack.Screen 
      name="SPresentation" 
      component={SPresentation} 
      options={
        { title: 'Presentation' }
      }
   />
   <Stack.Screen 
      name="SSynopsisStatus" 
      component={SSynopsisStatus} 
      options={
        { title: 'Synopsis Status' }
      }
   />
   <Stack.Screen 
      name="SDecsion" 
      component={SDecsion} 
      options={
        { title: 'Synopsis Decision' }
      }
   />
    <Stack.Screen 
      name="FacultyPortal" 
      component={FacultyPortal} 
      options={
        { title: 'Faculty Dashboard' },
        {headerLeft: null} 
    }/>
    <Stack.Screen 
      name="FSubmitTask" 
      component={SubmitTask} 
      options={
        { title: 'Faculty Submit Task' }
    }/>
    <Stack.Screen 
      name="FSynopsisStatus" 
      component={SynopsisStatus} 
      options={
        { title: 'Synopsis Status' }
      }/>
      <Stack.Screen 
      name="FRTask" 
      component={RTask} 
      options={
        { title: 'Faculty Tasks' }
      }/>
      <Stack.Screen 
      name="FRComments" 
      component={RComments} 
      options={
        { title: 'Review Comments' }
      }/>
      <Stack.Screen 
      name="FPresentation" 
      component={Presentation} 
      options={
        { title: 'Presentations Schedule' }
      }/>
      <Stack.Screen 
      name="FDecsion" 
      component={Decsion} 
      options={
        { title: 'Synopsis Decision' }
      }/>
    </>
    }
      
      

    </Stack.Navigator>
  );
  }
}
