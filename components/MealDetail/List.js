import { StyleSheet, Text, View } from "react-native";

const List = ({ data }) => {
  return data.map((dataPoint) => (
    <View style={styles.listItem} key={dataPoint}>
      <Text style={styles.listItemText}>{dataPoint}</Text>
    </View>
  ));
};

export default List;

const styles = StyleSheet.create({
  listItem: {
    paddingVertical: 10,
    marginVertical: 5,
    marginHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#b5a9fa",
    backgroundColor: "#f3e7f9",
  },
  listItemText: {
    fontSize: 12,
    textAlign: "center",
    fontWeight: "bold",
  },
});
