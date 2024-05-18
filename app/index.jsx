import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Fontisto from "@expo/vector-icons/Fontisto";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export default function index() {
  return (
    <View style={styles.Container}>
      <Text style={styles.text}>LOGIN/SIGNUP</Text>
      <View>
        <Text style={styles.text_1}>Phone Number</Text>
        <View style={styles.align}>
          <TextInput
            style={styles.input_1}
            keyboardType="numeric"
            placeholder="Enter Your Number"
            placeholderTextColor="#f8f8ff"
          />
        </View>
        <View style={styles.container_1}>
          <Ionicons
            name="square-outline"
            size={24}
            color="#fff"
            style={styles.align_1}
          />

          <Text style={styles.text_2}>Hello I'm Nasir Shaikh Typing here </Text>
        </View>

        <Text style={styles.text_3}>
          Unable to recieve sms? Send OTP on Email
        </Text>

        <Text style={styles.text_4}>-------- Or Continue With ---------</Text>
        <View style={styles.logo}>
          <Fontisto name="google" size={26} color="white" />
          <MaterialCommunityIcons name="apple" size={26} color="white" />
          <MaterialIcons name="password" size={26} color="white" />
        </View>

        <TouchableOpacity style={styles.button}>
          <Text>Send OTP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#000",
    flex: 1,
  },

  text: {
    color: "#fff",
    fontSize: 25,
    paddingLeft: 20,
    marginTop: 10,
  },

  text_1: {
    color: "#fff",
    marginTop: 50,
    paddingLeft: 20,
    fontSize: 15,
  },

  input: {
    margin: 12,
    padding: 10,
    color: "#fff",
  },

  input_1: {
    borderWidth: 0.5,
    backgroundColor: "#212122",
    borderRadius: 10,
    marginTop: 10,
    height: 40,
    width: 300,
    paddingLeft: 12,
  },

  align: {
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 56,
  },

  input_2: {
    borderWidth: 0.5,
    backgroundColor: "#000",
    borderRadius: 0,
    borderColor: "#fff",
    marginTop: 20,
    height: 20,
    width: 20,
  },

  align_1: {
    // paddingRight: 280,
    marginTop: 10,
  },
  text_2: {
    color: "#fff",
    marginTop: 30,
    justifyContent: "flex-start",
  },

  container_1: {
    flexDirection: "row",
    paddingLeft: 20,
  },

  text_3: {
    color: "#fff",
    marginTop: 30,
    padding: 20,
    fontWeight: "500",
  },

  text_4: {
    color: "#fff",
    textAlign: "center",
    marginTop: 20,
  },

  logo: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 40,
    marginHorizontal: 40,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#98FF98",
    padding: 10,
    marginTop: 100,
    width: 350,
    borderRadius: 10,
    alignSelf: "center",
  },
});
