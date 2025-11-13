import UserList from './Components/UserList';
import { StatusBar, View, Text } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden={true} />
      <UserList />
    </View>
  );
}