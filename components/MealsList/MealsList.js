import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "./MealItem";
import { useNavigation } from "@react-navigation/native";

export default function MealsList({ items }) {
  const navigation = useNavigation();

  function renderMealItem(itemData) {
    function pressHandler() {
      navigation.navigate("MealDetails", {
        mealId: itemData.item.id,
      });
    }

    return (
      <MealItem
        title={itemData.item.title}
        meal={itemData.item}
        onPress={pressHandler}
      />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
