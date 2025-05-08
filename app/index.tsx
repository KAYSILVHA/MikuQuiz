import { Image, ImageBackground, StyleSheet, Text, TextInput, View } from "react-native";

export default function Index() {
  return (
    <ImageBackground
      source={require("../assets/images/background-login.png")}
      style={style.container}
    >
      <View
        style={style.containerLogo}
      >
        <Image
          source={require("../assets/images/miku-logo.png")}
          style={style.logo}
        />
      </View>
      <View
        style={style.containerInput}
      >
        <TextInput
          style={style.input}
          placeholderTextColor="#999"
        />
        <TextInput
          style={style.input}
          placeholderTextColor="#999"
        />
      </View>

    </ImageBackground>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: "center"
  },
  containerLogo: {
    width: '100%',
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
  logo: {
    width: 250,
    height: 100,
    resizeMode: 'contain',
  },
  containerInput: {
    width: '80%',
    height: '80%',
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    gap: 10,
  },
  input: {
    height: 50,
    width: '100%',
    borderColor: '#F599BC',
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#000',
    backgroundColor: '#fff',
  }
})