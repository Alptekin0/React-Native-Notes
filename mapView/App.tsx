import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { MapStyle } from './MapStyle';

export default function App() {

  const initialRegion = {
    latitude: 40.9049401,
    longitude: 31.1470767,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }

  return (
    <View style={styles.container}>
      <MapView initialRegion={initialRegion} customMapStyle={MapStyle} style={styles.map}>  <Marker coordinate={initialRegion} /> </MapView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: "100%",
    height: "40%",
    borderWidth: 5,
    borderColor: "blue"
  }
});
