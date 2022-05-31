import React, { Component } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import MealItem from "./MealItem";

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      data: null
    };
  }

  fetchData = async query => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
    const response = await fetch(url);
    const json = await response.json();
    this.setState({ data: json.meals });
  };

  itemMealHandler = idMeal => {
    this.props.navigation.push("DetailScreen", { idMeal });
  };

  

  onSubmitEditingHandler = () => {
    this.fetchData(this.state.query);
  };

  componentDidMount() {
    this.fetchData(this.state.query);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.toolbar}>
          <View style={{ flexDirection: "column" }}>
            <Text style={styles.title}>Your Recipe</Text>
            <Text>What do you want to cook?</Text>
          </View>
          
        </View>
        <TextInput
          style={styles.inputForm}
          placeholder="Search for a meal..."
          onChangeText={query => this.setState({ query })}
          onSubmitEditing={this.onSubmitEditingHandler}
        />
        <FlatList
          keyExtractor={item => item.idMeal}
          data={this.state.data}
          renderItem={meal => (
            <MealItem
              meal={meal.item}
              onPressItem={idMeal => this.itemMealHandler(idMeal)}
            />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  toolbar: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold"
  },
  inputForm: {
    margin: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: "#EEEEEE"
  }
});
