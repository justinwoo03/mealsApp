import { View, Text, StyleSheet } from "react-native";

export default function MealSummary({ meal, style, textStyle }) {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, textStyle]}>
        {meal.duration.toString().toUpperCase()}m
      </Text>
      <Text style={[styles.detailItem, textStyle]}>
        {meal.complexity.toString().toUpperCase()}
      </Text>
      <Text style={[styles.detailItem, textStyle]}>
        {meal.affordability.toString().toUpperCase()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
