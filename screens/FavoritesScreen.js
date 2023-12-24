//import liraries
import React, { useContext } from 'react';
import MealsList from '../components/MealsList/MealsList';
import { MEALS } from '../data/dummy-data';
import { FavoritesContext } from '../store/context/favorites-context';
import { StyleSheet, Text, View } from 'react-native';

// create a component
const FavoritesScreen = () => {

    const favoriteMealsCtx = useContext(FavoritesContext);

    const favoriteMeals = MEALS.filter((meal) =>
        favoriteMealsCtx.ids.includes(meal.id)
    );
    
    if (favoriteMeals.length === 0) {
        return (
            < View style={styles.rootContainer} >
                <Text style={styles.text}>즐겨찾기 된 메뉴가 없습니다</Text>
            </View >
        )
    }

    return (
        <MealsList items={favoriteMeals} />
    );
};

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
});

//make this component available to the app
export default FavoritesScreen;
