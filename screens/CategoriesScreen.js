import { FlatList } from "react-native";
import CategoryTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";



function CategoriesScreen({ navigation }) {
    function renderCategoryItem(itemData) {
        function pressHandler() { 
            navigation.navigate("MealsOVerview",{
                categoryId:itemData.item.id,
            });
        }
        
        return (
            <CategoryTile
                title={itemData.item.title}
                color={itemData.item.color}
                onPress={pressHandler}
            />
        )
    }

    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}
            numColumns={2}
        />
    )
}

export default CategoriesScreen;