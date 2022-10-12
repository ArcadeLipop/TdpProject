import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeStack } from './StackNavigators';


const Drawer = createDrawerNavigator()

export default function DrawerNavigator(){
    return(
        <Drawer.Navigator>
             <Drawer.Screen 
                 name = "Home"
                 component = {HomeStack}
                 options ={{
                     title:"Profile",
                 headerShown : false                                      
                 }}

                
             />
        </Drawer.Navigator>
    );
}   