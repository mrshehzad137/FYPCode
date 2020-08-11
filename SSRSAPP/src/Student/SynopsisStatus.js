import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
export default class SSynopsisStatus extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: 'Ali',
    }
  }

  UNSAFE_componentWillMount(){
    getdata= async(key)=>{
        const data=await AsyncStorage.getItem(key);
        if(data==="Faculty"){
            this.props. navigation.navigate("FacultyPortal");
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
      var {user}=this.state;
      
    //   Alert.alert("mesaage",user);
    return (
      <View style={styles.container}>
         <Text>Student Synopsis Status</Text>
         <Text>{user}</Text>
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
//   buttonContainer: {
//     height:45,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom:20,
//     width:250,
//     borderRadius:30,
//   },
//   loginButton: {
//     backgroundColor: "#00b5ec",
//   },
//   loginText: {
//     color: 'white',
//   }
});