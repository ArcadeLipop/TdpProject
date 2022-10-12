import React from 'react';
import Animated, {
    useSharedValue,
    withTiming,
    useAnimatedStyle, interpolate,
    Easing,
  } from 'react-native-reanimated';
import { StatusBar } from 'expo-status-bar';
import { Button, Icon} from '@rneui/base';
import { StyleSheet, Text, Dimensions, View,ScrollView, ImageBackground,TextInput, TouchableOpacity, Image } from 'react-native';
import { colors,parameters } from '../global/styles';
import { useNavigation } from '@react-navigation/native';
import MapView from 'react-native-maps';

export default function BusLocation(props) {
    const {height, width} = Dimensions.get('window');
  const Nav = useNavigation();
  const randomWidth = useSharedValue(1);

  const style = useAnimatedStyle(() => {
    const interpolation = interpolate(randomWidth.value, [0, 1], [height/-2,0])
    return {
      transform:[{translateY: withTiming(interpolation, {duration:1000})}]
    };
  });

  return (

    <View style={styles.container}>
    <View style={styles.box1}>
    <ImageBackground source={require("../../assets/main-image.png")} resizeMode="cover" style={styles.image}>
    <View style={styles.con1}>  
    <TouchableOpacity onPress={() => Nav.openDrawer()}>
      <Icon type = "material-community" name = "menu" color ={colors.white} size = {35} />
    </TouchableOpacity>
    </View>
    <View style = {styles.con2}>
            <Text style = {styles.text}>Bus Tracking</Text>
        </View>
          
   
     <View style={styles.con4}>
           <MapView style={styles.map} />
           <View style={styles.button}>
          <TouchableOpacity onPress={() => props.navigation.navigate("reanimated")}> 
            <Text style ={styles.button1Text}>Login</Text>
          </TouchableOpacity>
          </View>
        </View>
    <View style={styles.con3}>

     <TextInput style={styles.inputstyle}
            placeholder="Input Bus ID"
            keyboardType={'phone-pad'}>
          </TextInput>
        
          <TextInput style={styles.inputstyle}
            placeholder="Input Bus Stop"
            keyboardType={'phone-pad'}>
          </TextInput> 

        <View style ={styles.button1}>     
              <TouchableOpacity onPress={() => props.navigation.navigate("BusSearch")}>
                <Text style ={styles.button1Text}>Search</Text></TouchableOpacity>
        </View>
        <View style ={styles.button2}>     
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
        flex:1,
        alignItems:'center',
        paddingTop: 10,

    },
      con4:{
        paddingTop:10,
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
        height: 237,
      },



});
