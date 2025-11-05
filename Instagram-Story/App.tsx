import { View, StyleSheet, StatusBar, FlatList } from 'react-native';
import Story from './Components/Story';
import { fakerTR } from '@faker-js/faker';

const DATA = Array(120).fill(null).map((e) => ({
  id: fakerTR.string.uuid(),
  person: fakerTR.image.personPortrait(),
  name: fakerTR.person.fullName(),
}))


export default function App() {


  return (
    <View style={styles.container}>

      <StatusBar hidden={true} />

      <FlatList data={DATA} keyExtractor={(item) => item.id} renderItem={({ item }) => <Story person={item.person} name={item.name} />} horizontal={true} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: 400,
    backgroundColor: "black",
    height: "15%",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 10,
    marginTop: 32

  }
})