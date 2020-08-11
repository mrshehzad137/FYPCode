import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
// import axios from 'axios';

export default class StudentLoginView extends Component {

  constructor(props) {
    super(props);
    state = {
      email   : '',
      password: '',
    }
  }

  UNSAFE_componentWillMount(){
    getdata= async(key)=>{
        const data=await AsyncStorage.getItem(key);
        if(data==="Student"){
            this.props. navigation.navigate("StudentPortal");
        }
        
     }
      getdata('UserType');
  }
   

  onClickListener = (viewId) => {
    const saveData = async (key,data) => {
      try {
        await AsyncStorage.setItem(key, data)
        // alert('Data successfully saved');
        console.log("Data successfully saved"+data);
      } catch (e) {
        // alert('Failed to save the data to the storage')
        console.log("Failed to save the data to the storage");
      }
    }
    const data={
      email:this.state.email,
      password:this.state.password
    }
    console.log(data);
    fetch("http://192.168.8.100:4000/api/student/signin",{
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((json) => {
      console.log(json.message);
      console.log(json.Userdata.name);
      saveData("Token",json.token);
      saveData("UserName",json.Userdata.name);
      saveData("Userid",json.Userdata.userId);
      saveData("UserType",json.Userdata.userType);
      saveData("UserEmail",json.Userdata.email);
      Alert.alert("Success Message",json.message);
      this.props. navigation.navigate("StudentPortal");

    })
    .catch(err=>{
      console.log("am here in fix");
      console.log(err);
    })
    // Alert.alert("Alert", "Button pressed "+this.state.email+""+this.state.password);
  }

  render() {
    return (
      
      <View style={styles.container}>
        <View style={styles.imagecontainer}>
          <Image source={require('../assets/img/student.png')} style={{width:200,height:200}}/>
        </View>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}/>
        </View>
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('login')}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('restore_password')}>
            <Text>Forgot your password?</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('register')}>
            <Text>Register</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  imagecontainer:{
      borderColor:'#000000',
      borderRadius:5,
      marginBottom:20,
      marginTop:20,
      marginLeft:10
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  }
});