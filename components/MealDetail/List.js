//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
function List({ data }) {
    return (data.map((dataPoint) =>
        <View style={styles.listItem} key={dataPoint}>
            <Text style={styles.itemText} >{dataPoint}</Text>
        </View>
    ));
};

// define your styles
const styles = StyleSheet.create({
    listItem: {
       borderRadius:6,
       paddingHorizontal:8,
       paddingVertical:4,
       marginHorizontal:12,
        backgroundColor: '#e2b497',
    },
    itemText:{
        color:'#351401',
        textAlign:'center',
    },
});

//make this component available to the app
export default List;