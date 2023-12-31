import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoritesScreen from './screens/FavoritesScreen';
import { Ionicons } from "@expo/vector-icons"
import FavortiesContextProvider from './store/context/favorites-context';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#351401' },
        headerTintColor: 'white',
        sceneContainerStyle: { backgroundColor: '#3f2f25' },
        drawerContentStyle: { backgroundColor: '#351401' },
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#351401',
        drawerActiveBackgroundColor: '#e4baa1'
      }}>
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: '모든 카테고리',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          )
        }}
      />
      <Drawer.Screen name="Favorites" component={FavoritesScreen}
        options={{
          title: '즐겨찾기',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          )
        }}
      />
    </Drawer.Navigator>
  )
}

export default function App() {

  return (
    <>
      <StatusBar style='light' />
      <FavortiesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: '#351401' },
              headerTintColor: 'white',
              contentStyle: { backgroundColor: '#3f2f25' },
            }}
          >
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MealsOVerview"
              component={MealsOverviewScreen}
            />
            <Stack.Screen
              name="MealDetailScreen"
              component={MealDetailScreen}
              options={{
                title: '상세보기'
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavortiesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
