import { Text, View, StyleSheet} from "react-native";
import MealsList from "../components/MealsList/MealsList";
import { useContext } from "react";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";

export default function FavoritesScreen() {
  const favoriteMealsContext = useContext(FavoritesContext);

  const favoriteMeals = MEALS.filter(meal =>
    favoriteMealsContext.ids.includes(meal.id)
  );

  if(favoriteMeals.length === 0) {
    return <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
    </View>
  }

  return (
    <View style={styles.root}>
      <MealsList items={favoriteMeals} />
    </View>
  );
}

const styles = StyleSheet.create({
    root: {
        flex: 1
    },
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    }
    
})