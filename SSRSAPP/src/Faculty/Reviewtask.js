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
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

export default class RTask extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: 'Ali',
      task:[],
      tableheads:['Synopsis Title','Assigned Date','Due Date','Status','Action']
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
      axios.post('http://192.168.8.100:4000/api/faculty/getReviewTasks',{id:fid})
      .then(res=>{
        this.setState({
          task:res.data.list
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
      var {task}=this.state;
      var {tableheads} =this.state;
      console.log(task);
    //   Alert.alert("mesaage",user);
    return (
      <View style={styles.container}>
         <Text>Review tasks</Text>
         {task.map((data,index)=>
         <View key={index}>
           <Text>------------------------------------------------------</Text>
           <Text>Task Id:{index+1}</Text>
           <Text>Synopsis Title: {data.synopsis.title}</Text>
           <Text>Assigned Date: {data.assignedDate.substr(0,10)}</Text>
           <Text>Deadline: {data.deadline.substr(0,10)}</Text>
           <Text>Status: {data.status}</Text>
           <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.props.navigation.navigate("FDecsion")}>
             <Text style={styles.loginText}>Submit Task</Text>
           </TouchableHighlight>
           <Text>------------------------------------------------------</Text>
         </View>
         )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    marginTop:15,
    width:150,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  }
});