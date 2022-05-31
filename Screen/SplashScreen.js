import React, { Component } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default class SplashScreen extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.replace("LoginScreen");
    }, 3000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("../assets/splash.png")}
          style={{ width: 192, height: 192 }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  }
});
