import React, { Component } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  View
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import IngredientItem from "./IngredientItem";

export default class DetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  fetchData = async () => {
    console.log(this.props.route.params.idMeal);
    const idMeal = this.props.route.params.idMeal;
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    );
    const json = await response.json();

    const data = json.meals[0];
    data.ingredientWithMeasure = this.mapIngredientWithMeasure(data);
    this.setState({ data });
  };

  mapIngredientWithMeasure = data => {
    let measureWithIngredient = [
      {
        measure: data.strMeasure1,
        ingredient: data.strIngredient1
      },
      {
        measure: data.strMeasure2,
        ingredient: data.strIngredient2
      },
      {
        measure: data.strMeasure3,
        ingredient: data.strIngredient3
      },
      {
        measure: data.strMeasure4,
        ingredient: data.strIngredient4
      },
      {
        measure: data.strMeasure5,
        ingredient: data.strIngredient5
      },
      {
        measure: data.strMeasure6,
        ingredient: data.strIngredient6
      },
      {
        measure: data.strMeasure7,
        ingredient: data.strIngredient7
      },
      {
        measure: data.strMeasure8,
        ingredient: data.strIngredient8
      },
      {
        measure: data.strMeasure9,
        ingredient: data.strIngredient9
      },
      {
        measure: data.strMeasure10,
        ingredient: data.strIngredient10
      },
      {
        measure: data.strMeasure11,
        ingredient: data.strIngredient11
      },
      {
        measure: data.strMeasure12,
        ingredient: data.strIngredient12
      },
      {
        measure: data.strMeasure13,
        ingredient: data.strIngredient13
      },
      {
        measure: data.strMeasure14,
        ingredient: data.strIngredient14
      },
      {
        measure: data.strMeasure15,
        ingredient: data.strIngredient15
      },
      {
        measure: data.strMeasure16,
        ingredient: data.strIngredient16
      },
      {
        measure: data.strMeasure17,
        ingredient: data.strIngredient17
      },
      {
        measure: data.strMeasure18,
        ingredient: data.strIngredient18
      },
      {
        measure: data.strMeasure19,
        ingredient: data.strIngredient19
      },
      {
        measure: data.strMeasure20,
        ingredient: data.strIngredient20
      }
    ];

    return measureWithIngredient.filter(function(el) {
      return el.measure != "" && el.ingredient != "";
    });
  };

  onBackPressedHandler = () => {
    this.props.navigation.pop();
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    let meal = this.state.data;
    return (
      <View style={styles.container}>
        <FontAwesome
          name="close"
          size={32}
          style={styles.back}
          onPress={this.onBackPressedHandler}
        />
        <ScrollView>
          <Image source={{ uri: meal.strMealThumb }} style={{ height: 192 }} />
          <Text style={styles.title}>{meal.strMeal}</Text>
          <Text style={styles.subtitle}># Ingredients</Text>
          <FlatList
            data={meal.ingredientWithMeasure}
            keyExtractor={({ item, i }) => i}
            renderItem={ingredient => (
              <IngredientItem ingredientWithMeasure={ingredient.item} />
            )}
          />
          <Text style={styles.subtitle}># Instructions</Text>
          <Text style={styles.normalText}>{meal.strInstructions}</Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  back: {
    position: "absolute",
    padding: 8,
    zIndex: 99
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    padding: 16
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 8,
    marginStart: 16
  },
  normalText: {
    fontSize: 14,
    marginTop: 8,
    padding: 8,
    marginHorizontal: 32
  }
});
