import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Icon} from '@rneui/base';
import { StyleSheet, Text, Dimensions, View,ScrollView, ImageBackground,TextInput, TouchableOpacity, Image } from 'react-native';
import { colors,parameters } from '../global/styles';
import { useNavigation } from '@react-navigation/native';
const SCREEN_WIDTH = Dimensions.get('window').width;

export default function Passenger(props) {
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
            <Text style = {styles.text}>Passenger Number Update</Text>
        </View>
          
     <View style={styles.con3}>
          <TextInput style={styles.inputstyle}
            placeholder="Seats Available on Bus "
            keyboardType={'phone-pad'}>
          </TextInput> 

          <TextInput style={styles.inputstyle}
            placeholder="Passengers Getting on Bus "
            keyboardType={'phone-pad'}>
          </TextInput> 
          </View>
         <View style={styles.con4}>
        <View style ={styles.button1}>     
              <TouchableOpacity onPress={() => props.navigation.navigate("HomePage")}>
                <Text style ={styles.buttonText}>Quarter</Text></TouchableOpacity>
        </View>
        <View style ={styles.button1}>     
              <TouchableOpacity onPress={() => props.navigation.navigate("HomePage")}>
                <View ><Text style ={styles.buttonText}>Half</Text></View></TouchableOpacity>
         </View>
         <View style ={styles.button1}>     
              <TouchableOpacity onPress={() => props.navigation.navigate("HomePage")}>
                <View ><Text style ={styles.buttonText}>Three Quarters</Text></View></TouchableOpacity>
         </View>
         <View style ={styles.button1}>     
              <TouchableOpacity onPress={() => props.navigation.navigate("HomePage")}>
                <View ><Text style ={styles.buttonText}>Full</Text></View></TouchableOpacity>
         </View>
        </View>
        <View style={styles.con5}>
        <View style ={styles.button1}>     
              <TouchableOpacity onPress={() => props.navigation.navigate("HomePage")}>
                <Text style ={styles.button1Text}>Update</Text></TouchableOpacity>
        </View>
        <View style ={styles.button1}>     
              <TouchableOpacity onPress={() => props.navigation.navigate("HomePage")}>
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
    flex:.3,
    padding:10,
    flexDirection:'row',
    backgroundColor:"#F9DACF"

  },
  text: {
    color: "black",
    fontSize: 30,
    lineHeight: 84,
  },
  
  buttonText: {
    color:"white",
    textAlign:'center',
    fontSize:15,
    marginTop:-2,
    fontWeight:"bold"
  },


  inputstyle:{
    borderRadius: 2, 
    height:50,
    color: colors.blue, 
    paddingHorizontal: 10, 
    backgroundColor:"white",
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
        paddingTop:10,
        flex:.2,
        justifyContent:"flex-start",
        alignItems:'center',

      },
      con4:{
        flex:.2,
        justifyContent:'space-around',
        flexDirection:'row',
        alignItems:'flex-start',
      },

      con5:{
        flex:.2,
        justifyContent:'space-around',
        alignItems:'flex-start',
        flexDirection:'row',

      },
      
      button1:{
        height:40,
        width:80,
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
      }



});
