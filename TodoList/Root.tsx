import { StyleSheet, StatusBar, View, Alert, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { Input, Button, Todo } from './Componenets'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from './Slices/store';
import { SetInput } from './Slices/InputSlice';
import { SetTodo } from './Slices/TodoSlice';



const Root = () => {

     const dispatch = useDispatch();
     const { input } = useSelector((state: RootState) => state.inputReducer);
     const todos = useSelector((state: RootState) => state.TodoReducer.todos);



     const buttonPress = () => {
          const newTodo = input.trim();

          if (newTodo === "") return;

          if (newTodo.length > 50) {
               Alert.alert("Too many characters!");
               dispatch(SetInput(""));
               return;
          }

          if (todos.includes(newTodo)) {
               Alert.alert("Eklediğiniz Todo zaten var");
               return;
          }

          dispatch(SetTodo(newTodo));
          dispatch(SetInput(""));
     }

     return (
          <View style={styles.container}>

               <StatusBar hidden={true} />

               <View style={styles.UstGovde}>
                    <Input input={input} SetInput={(text) => dispatch(SetInput(text))} />
                    <View style={styles.button}>
                         <Button pressed={buttonPress} />
                    </View>

               </View>


               <ScrollView contentContainerStyle={styles.scrollContent} style={styles.AltGovde}>
                    <Todo />
               </ScrollView>



          </View>
     )
}

export default Root

const styles = StyleSheet.create({

     container: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: "black",
     },
     UstGovde: {
          flex: 0.5,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 20,
     },
     AltGovde: {
          flex: 0.5,
          width: "100%",
          backgroundColor: "black",
          padding: 20,
     },
     scrollContent: {
          alignItems: "center",
          justifyContent: "flex-start",
          paddingBottom: 90,
     },
     button: {
          alignSelf: "flex-end",
          marginRight: 30,
          marginTop: 30,
     },

})