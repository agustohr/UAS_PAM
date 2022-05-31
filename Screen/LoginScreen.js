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
import { FontAwesome } from "@expo/vector-icons";

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      isError: false
    };
  }

  loginHandler = () => {
    if (this.state.userName === "Chef" && this.state.password === "12345") {
      this.props.navigation.push("HomeScreen");
    } else {
      this.setState({ isError: true });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 0.5 }} />
        <View style={styles.header}>
          <Text style={styles.title}>
            Hello <Text style={{ fontWeight: "bold" }}>Chef,</Text>
          </Text>
          <Text style={{ paddingLeft: 4, paddingVertical: 8 }}>
            Enter your credential to continue
          </Text>
        </View>
        <View style={styles.loginContainer}>
          <TextInput
            style={styles.inputForm}
            placeholder="Username"
            onChangeText={userName => this.setState({ userName })}
          />
          <TextInput
            style={styles.inputForm}
            placeholder="Password"
            onChangeText={password => this.setState({ password })}
            secureTextEntry={true}
          />
          <TouchableOpacity onPress={this.loginHandler}>
            <View style={styles.loginButton}>
              <FontAwesome name="long-arrow-right" size={32} color="white" />
            </View>
          </TouchableOpacity>
          <Text
            style={
              this.state.isError ? styles.errorText : styles.hiddenErrorText
            }
          >
            Password Salah
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 32
  },
  header: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  title: {
    fontSize: 48,
    color: "#2d2013"
  },
  loginContainer: {
    flex: 1
  },
  inputForm: {
    marginTop: 16,
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderBottomColor: "gray",
    borderBottomWidth: 1
  },
  loginButton: {
    alignSelf: "flex-end",
    marginTop: 16,
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: "#2d2013",
    borderRadius: 8
  },
  errorText: {
    color: "red",
    textAlign: "center",
    marginTop: 16
  },
  hiddenErrorText: {
    color: "transparent",
    textAlign: "center",
    marginTop: 16
  }
});
