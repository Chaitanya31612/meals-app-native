import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const MealItem = ({ title, imageUrl, duration, complexity, affordability }) => {
  return (
    <View style={styles.mealItem}>
      <Pressable android_ripple={{ color: "#ccc" }}>
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.detailsText}>{duration}m</Text>
          <Text style={styles.detailsText}>{complexity.toUpperCase()}</Text>
          <Text style={styles.detailsText}>{affordability.toUpperCase()}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
    elevation: 1,
    margin: 16,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    margin: 8,
  },
  details: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    marginBottom: 8,
  },
  detailsText: {
    marginHorizontal: 4,
  },
});
