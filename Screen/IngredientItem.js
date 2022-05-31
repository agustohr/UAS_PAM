import React, { Component } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default class IngredientItem extends Component {
  render() {
    let ingredientWithMeasure = this.props.ingredientWithMeasure;
    return (
      <View style={styles.container}>
        <Text
          style={styles.ingredientItem}
        >{`${ingredientWithMeasure.measure} ${ingredientWithMeasure.ingredient}`}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 8
  },
  ingredientItem: {
    fontSize: 14,
    marginLeft: 32
  }
});
