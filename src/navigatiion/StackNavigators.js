import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import HomePage from '../screens/HomePage';
import Passenger from '../screens/Passenger';
import BusLocation from '../screens/BusLocation';
import Map from '../screens/Map';
import BusSearch from '../screens/BusSearch';
import reanimated from '../screens/reanimated';
const Home = createNativeStackNavigator();

export function HomeStack(){
    return(
        <Home.Navigator>

        <Home.Screen
                name ="Login"
                component = {Login}
                options ={{headerShown:false}}
        />


<Home.Screen
                name ="HomePage"
                component = {HomePage}
                options ={{headerShown:false}}
        />

<Home.Screen
                name ="Passenger"
                component = {Passenger}
                options ={{headerShown:false}}
        />

<Home.Screen
                name ="BusLocation"
                component = {BusLocation}
                options ={{headerShown:false}}
        />
<Home.Screen
                name ="Map"
                component = {Map}
                options ={{headerShown:false}}
        />

     
        <Home.Screen
                name ="BusSearch"
                component = {BusSearch}
                options ={{headerShown:false}}
        />


        <Home.Screen
        name ="reanimated"
        component = {reanimated}
        options ={{headerShown:false}}
/>

</Home.Navigator>
        
    );
}