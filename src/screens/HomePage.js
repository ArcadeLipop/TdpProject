import React from 'react';
import { StatusBar } from 'react-native-status-bar-height';
import { Button, Icon} from '@rneui/base';
import { StyleSheet, Text, Dimensions, View, ImageBackground,TextInput, TouchableOpacity, Image } from 'react-native';
import { colors,parameters } from '../global/styles';
import { useNavigation } from '@react-navigation/native';

export default function HomePage(props) {
  const Nav = useNavigation();
  return (

    <View style={styles.container}>
    <View style={styles.box1}>
    <ImageBackground source={require("../../assets/main-image.png")} resizeMode="cover" style={styles.image}>
    <View style={styles.con1}>  
    <TouchableOpacity onPress={() => Nav.openDrawer()}>
      <Icon type = "material-community" name = "menu" color ={colors.white} size = {40} />
    </TouchableOpacity>
    </View>
    <View style = {styles.con2}>
            <Text style = {styles.text}>Welcome Staff</Text>
        </View>
          
     <View style={styles.con3}>
        <View style ={styles.button1}>     
              <TouchableOpacity onPress={() => props.navigation.navigate("BusLocation")}>
                <Text style ={styles.button1Text}>Bus Location Track</Text></TouchableOpacity>
        </View>
        <View style ={styles.button2}>     
              <TouchableOpacity onPress={() => props.navigation.navigate("Passenger")}>
                <View ><Text style ={styles.button1Text}>Passenger Number Update</Text></View></TouchableOpacity>
         </View>

         <View style ={styles.button3}>     
              <TouchableOpacity onPress={() => props.navigation.navigate("Map")}>
                <View><Text style ={styles.button1Text}>Settings</Text></View></TouchableOpacity>
          </View>

             </View>
    </ImageBackground>
    </View>

    </View>
    
);
  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:parameters.statusBarHeight,
    backgroundColor:"#F9DACF"
  },
  image: {
    flex: 1,
    justifyContent: "center",

  },
  con1:{
    flex:.1,
    alignItems: "flex-start",
    padding: 20

  },

  con2:{
    flex:.4,
    padding:10,
    flexDirection:'row',
    backgroundColor:"#F9DACF"

  },
  text: {
    color: "black",
    fontSize: 42,
    lineHeight: 84,
  },

    icon1: {
      flex:1,
      alignItems:"flex-start",
    
    },
      
      box1:{
        flex:1,
      },

      con3:{
        paddingTop:100,
        flex:1,
        alignItems:'center'

      },

      
      button1:{
        height:40,
        width:250,
        backgroundColor:"#F9DACF",
        borderRadius:0,
        alignItems:"center",
        justifyContent:"center"
      },

      button2:{
        height:40,
        width:250,
        backgroundColor:"#F9DACF",
        borderRadius:0,
        alignItems:"center",
        justifyContent:"center",
        marginTop:60
      },

      button3:{
        height:40,
        width:250,
        backgroundColor:"#F9DACF",
        borderRadius:0,
        alignItems:"center",
        justifyContent:"center",
        marginTop:60
      },

      button1Text:{
        color:"black",
        fontSize:17,
        marginTop:-2,
        fontWeight:"bold"
      }
});