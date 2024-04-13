import { StyleSheet, Text, View } from "react-native";

const Subtitle = ({ children }) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  subtitleContainer: {
    padding: 6,
    marginHorizontal: 24,
    marginVertical: 4,
    borderBottomColor: "#b5a9fa",
    borderBottomWidth: 2,
    marginBottom: 8,
  },
  subtitle: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    color: "#604bd9",
  },
});
