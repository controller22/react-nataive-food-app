//import liraries
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import MealItem from './MealItem';

// create a component
function MealsList  ({items})  {

    function rederMealItem(itemData) {
        const item = itemData.item;
        
        const mealItemProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability,
        }
        return <MealItem {...mealItemProps} />
    }
    return (
        <View style={styles.container} >
            <FlatList
                data={items}
                keyExtractor={(item) => item.id}
                renderItem={rederMealItem}
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:16,
    },
});

//make this component available to the app
export default MealsList;
