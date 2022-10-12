import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Icon} from '@rneui/base';
import { StyleSheet, Text, Dimensions, View,ScrollView, ImageBackground,TextInput, TouchableOpacity, Image } from 'react-native';
import { colors,parameters } from '../global/styles';
import { useNavigation } from '@react-navigation/native';
import MapView from 'react-native-maps';

export default function BusSearch(props) {
  const Nav = useNavigation();
  return (

    <View style={styles.container}>
    <View style={styles.box1}>
    <ImageBackground source={require("../../assets/main-image.png")} resizeMode="cover" style={styles.image}>
    
   
     <View style={styles.con4}>
           <MapView style={styles.map} />
        </View>
    <View style={styles.con3}>

          
          <Text style={styles.inputstyle}> Bus ID</Text>
          <Text style={styles.inputstyle}> Bus Arrival Time</Text>
          <Text style={styles.inputstyle}> Seats Available</Text>


        <View style ={styles.button2}>     
              <TouchableOpacity onPress={() => props.navigation.navigate("BusLocation")}>
                <View ><Text style ={styles.button1Text}>Back</Text></View></TouchableOpacity>
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
    
    paddingTop:parameters.statusBarHeight
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
    flex:.5,
    padding:10,
    flexDirection:'row',
    backgroundColor:"#F9DACF"

  },
  text: {
    color: "black",
    fontSize: 30,
    lineHeight: 84,
  },

  inputstyle:{
    color: "black",
    textAlign: "center",
    fontSize: 30,
   
    borderRadius: 2, 
    height:50,
    backgroundColor:"#F9DACF",
    width: '78%', 
    marginVertical: 10

    },
    icon1: {
      flex:1,
      alignItems:"flex-start",
    
    },
      
      box1:{
        flex:1,

      },

      con3:{
        flex:1,
        alignItems:'center',
        paddingTop: 10,

    },
      con4:{
        paddingTop:20,
        flex:.8,
        alignItems:'center'

      },

      
      button1:{
        height:40,
        width:150,
        backgroundColor:colors.blue,
        borderRadius:0,
        alignItems:"center",
        justifyContent:"center",
        marginTop: 20
      },

      button2:{
        height:40,
        width:150,
        backgroundColor:colors.blue,
        borderRadius:0,
        alignItems:"center",
        justifyContent:"center",
        marginTop:15
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
        color:"white",
        fontSize:17,
        marginTop:-2,
        fontWeight:"bold"
      },
      map: {
        width: 300,
        height: 317,
      },



});
