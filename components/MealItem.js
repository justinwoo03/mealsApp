import {
  View,
  Pressable,
  Text,
  Image,
  StyleSheet,
  Platform,
} from "react-native";

export default function MealItem({ title, meal }) {
  return (
    <>
      <View style={styles.mealItem}>
        <Pressable
          android_ripple={{ color: "#ccc" }}
          style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        >
          <View style={styles.innerContainer}>
            <View>
              <Image source={{ uri: meal.imageUrl }} style={styles.image} />
              <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.details}>
              <Text style={styles.detailItem}>
                {meal.duration.toString().toUpperCase()}m
              </Text>
              <Text style={styles.detailItem}>
                {meal.complexity.toString().toUpperCase()}
              </Text>
              <Text style={styles.detailItem}>
                {meal.affordability.toString().toUpperCase()}
              </Text>
            </View>
          </View>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  buttonPressed: {
    opacity: 0.5,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.25,
  },
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
