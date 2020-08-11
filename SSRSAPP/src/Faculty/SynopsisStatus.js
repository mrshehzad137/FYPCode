import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
export default class SynopsisStatus extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: 'Ali',
      synopsis:[]
    }
  }

  // UNSAFE_componentWillMount(){
  //   getdata= async(key)=>{
  //       const data=await AsyncStorage.getItem(key);
  //       if(data==="Faculty"){
  //           this.props. navigation.navigate("FacultyPortal");
  //       }
        
  //    }
  //     getdata('UserType');
  // }

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

  componentDidMount(){
    getdata= async(key)=>{
      const fid=await AsyncStorage.getItem(key);
      axios.post('http://192.168.8.100:4000/api/faculty/getStudents',{id:fid})
      .then(res=>{
        this.setState({
          synopsis:res.data.data
        })
      })
      .catch(err=>{
        console.log(err);
    })
    }
          
  getdata('Userid');

    
  }
  

  render() {
      var {user}=this.state;
      var {synopsis}=this.state;
      console.log(synopsis.student);
    //   Alert.alert("mesaage",user);
    return (
      <View style={styles.container}>
         <Text>Student Synopsis</Text>
         {synopsis.map((synopsis,index)=>
         <View key={index}>
           <Text>------------------------------------------------------</Text>
           <Text>Sr#:{index+1}</Text>
           <Text>Synopsis Title: {synopsis.title}}</Text>
           <Text>Student Name: </Text>
           <Text>Student Reg: {(synopsis.student===null)?'':synopsis.student.regNumber}</Text>
           <Text>Status: {synopsis.status}</Text>
           {/* <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.props.navigation.navigate("FDecsion")}>
             <Text style={styles.loginText}>Submit Task</Text>
           </TouchableHighlight> */}
           <Text>------------------------------------------------------</Text>
         </View>
         )}
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