import { StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'

interface InputProps {
     input: string,
     SetInput: (text: string) => void;
}

const Input = ({ input, SetInput }: InputProps) => {


     return (
          <TextInput
               style={styles.input}
               placeholder='Todo Giriniz...'
               placeholderTextColor={"white"}
               value={input}
               onChangeText={(text) => SetInput(text)}
          />
     )
}

export default Input

const styles = StyleSheet.create({
     input: {
          width: "80%",
          height: "20%",
          borderBottomWidth: 2,
          borderBottomColor: "white",
          color: "white",
     },
})