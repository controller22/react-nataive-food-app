//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import {Ionicons}from '@expo/vector-icons'

// create a component
function IconButton({icon,color,onPress}){
    return (
       <Pressable 
       onPress={onPress}
       style={({pressed})=>pressed&&styles.pressed}
       >
        <Ionicons name={icon} size={24} color={color} />
       </Pressable>
    );
};

// define your styles
const styles = StyleSheet.create({
   pressed:{
    opacity:0.7,
   }
});

//make this component available to the app
export default IconButton;
