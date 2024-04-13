import { StyleSheet, Text, View } from "react-native";

const MealDetails = ({ duration, complexity, affordability }) => {
  return (
    <View style={styles.details}>
      <Text style={styles.detailsText}>{duration}m</Text>
      <Text style={styles.detailsText}>{complexity.toUpperCase()}</Text>
      <Text style={styles.detailsText}>{affordability.toUpperCase()}</Text>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
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
