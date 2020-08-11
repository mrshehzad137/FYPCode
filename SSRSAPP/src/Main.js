import React from 'react';
import { Text, View ,StyleSheet, Alert,Image} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

class Main extends React.Component{

    UNSAFE_componentWillMount(){
        getdata= async(key)=>{
            const data=await AsyncStorage.getItem(key);
            if(data==="Faculty"){
                this.props.navigation.navigate("FacultyPortal");
            }else if(data==="Student"){
                this.props.navigation.navigate("StudentPortal");
            }
            
         }
          getdata('UserType');
      }
    render(){
        return (
            <View style={{ marginTop:50,justifyContent: "center", alignItems: "center" }}>
            <View style={styles.imagecontainer}>
                <Image source={require('./assets/img/brand/256px-COMSATS_new_logo.jpg')} style={{width:200,height:200}}/>
                {/* <Text style={{marginTop:20,fontSize:18,width:300}}>Student Login</Text> */}
            </View>
            <Text 
                style={styles.loginTexts}
                onPress={() => this.props.navigation.navigate('Logins')}>
                Student
            </Text>
            <Text 
                style={styles.loginTextf}
                onPress={() => this.props.navigation.navigate('Loginf')}>
                Faculty
            </Text>   
            </View>
        );
    }
}

export default Main;

const styles = StyleSheet.create({
    loginTexts: {
      color: '#3740FE',
      marginTop: 25,
      textAlign: 'center',
      fontSize:24
    },
    imagecontainer:{
        borderColor:'#000000',
        borderRadius:5,
        marginBottom:20,
        marginTop:20,
        marginLeft:10
    },
    loginTextf: {
        color: '#3740FE',
        marginTop: 25,
        textAlign: 'center',
        fontSize:24
      },
  });
