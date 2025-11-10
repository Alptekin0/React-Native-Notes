import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, refresh, multiple } from '../slices/CountSlice';
import type { RootState } from '../store/store'; 
import ButtonComp from './ButtonComp';


const Counter = () => {

     const dispatch = useDispatch();
     const value = useSelector((state: RootState) => state.CountSliceReducer.value);

     return (
          <View style={styles.container}>
               <StatusBar hidden={true} />

               <Text style={styles.text}> {value}  </Text>

               <ButtonComp text='ARTTIR' fonks={ () => dispatch(increment())} />
               <ButtonComp text='AZALT' fonks={ () => dispatch(decrement())} />
               <ButtonComp text='SIFIRLA' fonks={ () => dispatch(refresh())} />
               <ButtonComp text='3X' fonks={ () => dispatch(multiple())} />


          </View>
     )
}

export default Counter

const styles = StyleSheet.create({
     container: {
          flex: 1,
          backgroundColor: '#000000',
          alignItems: 'center',
          justifyContent: 'center'
     },
     text: {
          fontSize: 30,
          fontWeight: '700',
          color: "white",
          margin: 20
     }
})