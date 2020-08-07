import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

class HomeScreen extends React.Component{
    render(){
        return(
            <View >
                <SafeAreaView style={{flex:1}}>
                    <TouchableOpacity style={{alignItems:'flex-start',margin:16}} 
                    onPress={()=>this.props.navigation.openDrawer()}>
                        <Icon name="bars" size={30} color="#cc5500" />
                    </TouchableOpacity>
                    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                        <Text>Home</Text>
                    </View>
                </SafeAreaView>  
            </View>
        )
    }
}

export default HomeScreen;