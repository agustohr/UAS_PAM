import React, { Component } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default class MealItem extends Component {
  render() {
    let meal = this.props.meal;
    const onPressItem = this.props.onPressItem;
    console.log(onPressItem);
    return (
      <TouchableOpacity onPress={() => onPressItem(meal.idMeal)}>
        <View style={styles.container}>
          <Image source={{ uri: meal.strMealThumb }} style={styles.thumbnail} />
          <View style={styles.containerMeal}>
            <Text numberOfLines={2} style={styles.mealName}>
              {meal.strMeal}
            </Text>
            <Text style={styles.category}>{meal.strCategory}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 8
  },
  thumbnail: { width: 96, height: 96, borderRadius: 8 },
  containerMeal: {
    flex: 1,
    justifyContent: "flex-start"
  },
  mealName: {
    flex: 1,
    fontSize: 16,
    marginLeft: 16,
    fontWeight: "bold"
  },
  category: {
    textAlign: "center",
    marginLeft: 16,
    padding: 8,
    borderRadius: 8,
    backgroundColor: "rgba(0, 0, 0, 0.05)"
  }
});
