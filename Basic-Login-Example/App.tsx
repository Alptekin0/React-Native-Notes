import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Image } from 'react-native';
import Loading from './components/Loading';


export default function App() {

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [AdSoyad, setAdSoyad] = useState("");
  const [loading, setLoading] = useState(false);

  const Load = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }


  return (
    <View style={styles.container}>

      {loading ? <Loading /> : null}


      <Image source={require("./assets/login-image.jpg")} style={styles.image} />


      <View style={styles.textWrapper}>
        <Text style={styles.text}>Hello {AdSoyad}</Text>
        <TextInput
          style={styles.input}
          placeholder="Adınızı giriniz..."
          placeholderTextColor={'white'}
          onChangeText={setName}
          value={name}
        />

        <TextInput style={styles.input}
          placeholder="Soyadınızı giriniz..."
          placeholderTextColor={'white'}
          keyboardType='default'
          onChangeText={(e) => setLastName(e)}
          value={lastName}
        />

        <Pressable style={({ pressed }) => [styles.button, { backgroundColor: pressed ? 'gray' : 'white' }]}
          onPress={() => {
            Load();
            setAdSoyad(`${name?.toUpperCase() || ''} ${lastName?.toUpperCase() || ''}`);
            setName("");
            setLastName("");
          }}>
          <Text>Giriş Yap</Text>

        </Pressable>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  textWrapper: {
    backgroundColor: 'black',
    width: 350,
    height: 350,
    borderWidth: 2,
    fontSize: 10,
    marginTop: 20,
    padding: 10,
    borderRadius: 55,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    pointerEvents: 'none',
    fontSize: 24,
  },
  input: {
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    marginTop: 20,
    width: '100%',
    color: 'white',
    paddingHorizontal: 10,
  },
  button: {
    marginTop: 20,
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    marginTop: 30,
    borderRadius: 45,
  },
});