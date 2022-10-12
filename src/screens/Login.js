import React from 'react';
import { StyleSheet, Text, View, ImageBackground,TextInput, TouchableOpacity, Image } from 'react-native';
import { colors,parameters } from '../global/styles';
 
export default function Login(props) {
  return (
    <View style={styles.container}>
    <ImageBackground source={require("../../assets/login-bg.png")} style={styles.loginimage} resizeMode="cover">
        <View style = {styles.imagespace}>

          <Text style={{fontSize: 40, color: colors.grey1, fontWeight: 'bold'}}>
            Welcome Staff
          </Text>
          <Text style={{ color: colors.grey3, fontSize: 19, fontWeight: 'bold', marginBottom: 20 }}>
            Login to your account
          </Text>
          </View>
          <View style={styles.img} >
            <Image style={styles.tinyLogo} source={require("../../assets/logo-main.png")} resizeMode="cover" />
          </View>
          <View style={styles.con}>
          <TextInput style={styles.inputstyle}
            placeholder="Email / Username"
            keyboardType={'email-address'}>
          </TextInput>
        
          <TextInput style={styles.inputstyle}
            placeholder="Password" 
            secureTextEntry={true}>
          </TextInput>  
          </View>
          <View style={styles.con1}>
          <View style={styles.button}>
          <TouchableOpacity onPress={() => props.navigation.navigate("HomePage")}> 
            <Text style ={styles.button1Text}>Login</Text>
          </TouchableOpacity>
          </View>
          </View>

    </ImageBackground>
  </View>
);
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },

    loginimage: {
        flex: 1,

    },
    imagespace:{
      paddingTop: 100,
        flex:.3,
        alignItems: 'center',
      },

       img:{
          flex:.3,
          alignItems:'center',

        },
        tinyLogo:{
        alignItems: 'center'
        },

        con:{
          flex:.3,
          alignItems:'center',

        },

        inputstyle:{
          borderRadius: 0, 
          paddingHorizontal: 10, 
          width: '55%', 
          height:40,
          backgroundColor: 'rgb(220,220, 220)', 
          marginVertical: 10
          },

        button1:{
          height:40,
          width:100,
          backgroundColor:colors.blue,
          borderRadius:0,
          alignItems:"center",
          justifyContent:"center",
          marginTop:20
        },
        con1:{
          flex:.3,
          alignItems:'center'
        },
        button:{
          
          height:40,
          width:100,
          backgroundColor:colors.blue,
          borderRadius:0,
          alignItems:"center",
          justifyContent:"center",
        },

        button1Text:{
          color:colors.white,
          fontSize:17,
          marginTop:-2
        }
});