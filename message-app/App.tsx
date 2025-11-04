import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList } from 'react-native';
import Bar from './Components/Bar';
import { faker } from '@faker-js/faker/locale/tr';
import { useEffect, useState } from 'react';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import mesajListesi from './metin.json';




interface BarProps {
  id: string,
  random: number,
  image: string,
  name: string,
  metin: string
}

const verileriUret = (): BarProps[] => {
  const veriler: BarProps[] = [];

  for (let i = 0; i < 50; i++) {
    const random = faker.number.int({ min: 0, max: 4 });
    const image = faker.image.personPortrait({ sex: 'female' });
    const name = faker.person.fullName({ sex: 'female' });
    const randomIndex = Math.floor(Math.random() * mesajListesi.length);
    const metin = mesajListesi[randomIndex];

    veriler.push({
      id: faker.string.uuid(),
      random: random,
      image: image,
      name: name,
      metin: metin
    });
  }
  return veriler;
}



export default function App() {

  const [veriler, setVeriler] = useState<BarProps[]>([]);

  useEffect(() => {
    const veri = verileriUret();
    setVeriler(veri);
  }, [])

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <StatusBar style="light" hidden={true} />
        <SafeAreaView style={{ flex: 1 }}>
          <FlatList
            data={veriler}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Bar {...item} />}
            style={styles.list}
            contentContainerStyle={{ paddingBottom: 40 }}
          />
        </SafeAreaView>
      </View>
    </SafeAreaProvider>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    //alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20,
  },


  list: {
    width: '100%', // FlatList'in tam genişliği kaplamasını sağlıyoruz
  }
});
