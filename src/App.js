import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import CustomButton from "./CustomButton";
import Header from "./Header";

const App = () => {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  const onPressHandler = () => {
    if (name.length > 3) {
      setSubmitted(!submitted);
    } else {
      setShowWarning(true);
    }
  };

  return (
    <ImageBackground
      style={styles.body}
      source={{
        uri: "https://cdn.pixabay.com/photo/2013/07/12/12/35/texture-145968_960_720.png",
      }}
    >
      <Header />
      <Modal
        visible={showWarning}
        transparent
        onRequestClose={() => setShowWarning(false)}
        animationType="slide"
        hardwareAccelerated
      >
        <View style={styles.centered_view}>
          <View style={styles.warning_modal}>
            <View style={styles.warning_title}>
              <Text style={styles.text}>WARNING!</Text>
            </View>
            <View style={styles.warning_body}>
              <Text style={styles.text}>
                The name must be longer than 3 characters
              </Text>
            </View>
            <Pressable
              style={styles.warning_button}
              onPress={() => setShowWarning(false)}
              android_ripple={{ color: "#fff" }}
            >
              <Text style={styles.text}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Text style={styles.text}>Please write your name:</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. Joti"
        onChangeText={(value) => setName(value)}
      />
      <CustomButton
        onPressFunction={onPressHandler}
        title={submitted ? "clear" : "submit"}
        color={"#00ff00"}
        style={{ margin: 10 }}
      />
      <CustomButton
        onPressFunction={onPressHandler}
        title={submitted ? "clear" : "submit"}
        color={"#ff00ff"}
      />
      {/* <Pressable
        onPress={onPressHandler}
        hitSlop={{ top: 0, bottom: 0, right: 10, left: 10 }}
        android_ripple={{ color: "#00f" }}
        style={({ pressed }) => [
          { backgroundColor: pressed ? "#dddddd" : "#00ff00" },
        ]}
      >
        <Text style={styles.text}>{submitted ? "Clear" : "Submit"}</Text>
      </Pressable> */}
      {submitted ? (
        <View style={styles.body}>
          <Text style={styles.text}>You are registered as {name}</Text>
          <Image
            style={styles.image}
            source={require("../assets/img/done.jpg")}
            resizeMode="stretch"
          />
        </View>
      ) : (
        <Image
          style={styles.image}
          source={{
            uri: "https://www.vhv.rs/dpng/d/524-5243967_oops-sign-transparent-background-clipart-png-download-traffic.png",
          }}
          resizeMode="stretch"
        />
      )}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    color: "#000000",
    fontSize: 20,
    margin: 10,
    textAlign: "center",
  },
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: "#555",
    borderRadius: 5,
    textAlign: "center",
    fontSize: 20,
    marginBottom: 10,
  },
  button: {
    width: 150,
    height: 50,
    alignItems: "center",
  },
  warning_modal: {
    width: 300,
    height: 300,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 20,
  },
  centered_view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000099",
  },
  warning_title: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff0",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  warning_body: {
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  warning_button: {
    backgroundColor: "#00ffff",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
  },
});

export default App;
