import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default class FacultyPortal extends Component {

  constructor(props) {
    super(props);
    state = {
      user   : '',
    }
  }

  UNSAFE_componentWillMount(){
    getdata= async(key)=>{
        const data=await AsyncStorage.getItem(key);
        if(data!=="Faculty"){
            this.props.navigation.navigate("StudentPortal");
        }
        
     }
      getdata('UserType');
  }
  onClickListener = () =>{
    const clearStorage = async () => {
        try {
            const keys = await AsyncStorage.getAllKeys();
            await AsyncStorage.multiRemove(keys);
          console.log("Storage  Clear successfully saved");
        } catch (e) {
          // alert('Failed to save the data to the storage')
          console.log("Failed to save the data to the storage");
          console.log(e);
        }
      }
      clearStorage();
      this.props. navigation.navigate("Main");
  }
  render() {
    return (
      <View style={styles.container}>
         <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.props.navigation.navigate("FRTask")}>
          <Text style={styles.loginText}>Review Tasks</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.props.navigation.navigate("FSynopsisStatus")}>
          <Text style={styles.loginText}>Synopsis</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.props.navigation.navigate("FRComments")}>
          <Text style={styles.loginText}>Review Comments</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.props.navigation.navigate("FPresentation")}>
          <Text style={styles.loginText}>Presentations</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.props.navigation.navigate("FDecsion")}>
          <Text style={styles.loginText}>Decisions</Text>
        </TouchableHighlight>
         <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('login')}>
          <Text style={styles.loginText}>Logout</Text>
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
//   inputContainer: {
//       borderBottomColor: '#F5FCFF',
//       backgroundColor: '#FFFFFF',
//       borderRadius:30,
//       borderBottomWidth: 1,
//       width:250,
//       height:45,
//       marginBottom:20,
//       flexDirection: 'row',
//       alignItems:'center'
//   },
//   inputs:{
//       height:45,
//       marginLeft:16,
//       borderBottomColor: '#FFFFFF',
//       flex:1,
//   },
//   inputIcon:{
//     width:30,
//     height:30,
//     marginLeft:15,
//     justifyContent: 'center'
//   },
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