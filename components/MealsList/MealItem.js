//import liraries
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import MealDetails from '../MealDetails';

// create a component
function MealItem({ id, title, imageUrl, duration, complexity, affordability }) {
    const navigation = useNavigation();

    function pressHandler() {
        navigation.navigate("MealDetailScreen", {
            mealId: id,
        });
    }

    return (
        <View style={styles.mealItem}>
            <View style={styles.innerContainer}>
                <Pressable
                    android_ripple={{ color: '#ccc' }}
                    style={({ pressed }) => [pressed ? styles.buttonPressed : null]}
                    onPress={pressHandler}
                >
                    <View>
                        <Image source={{ uri: imageUrl }} style={styles.image} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <MealDetails
                        duration={duration}
                        complexity={complexity}
                        affordability={affordability}
                    />
                </Pressable>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.35,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 16,
        overflow: Platform.OS === 'android' ? "hidden" : "visible"
    },
    buttonPressed: {
        opacity: 0.5
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        margin: 8,
    },

});

//make this component available to the app
export default MealItem;
