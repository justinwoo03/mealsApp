import { Pressable, View, Text, StyleSheet } from "react-native";

export default function CategoryGridTile({ title, color }) {
  return (
    <View style={styles.gridItems}>
      <Pressable>
        <View>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
    gridItems: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        // shadowColor: "black",
        // shadowOffset: { width: 0, height: 2 },
        // shadowRadius: 6,
        // shadowOpacity: 0.5,
    },  
})