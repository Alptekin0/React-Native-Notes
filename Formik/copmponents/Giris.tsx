import { StyleSheet, TextInput, Text, KeyboardTypeOptions, View } from 'react-native'
import React from 'react'

interface GirisProps {
     value: string,
     placeholder: string,
     keyboardType: KeyboardTypeOptions,
     error?: string | string[],
     onChangeText : (text: string) => void,
}

const Giris = ({ value, placeholder, keyboardType, error, onChangeText }: GirisProps) => {
     return (
          <>
               <TextInput value={value} style={styles.TextInput} placeholder={placeholder} keyboardType={keyboardType} onChangeText={onChangeText}/>
               {error && <Text style={{ color: "red" }}>{error}</Text>}
          </>
     )
}

export default Giris

const styles = StyleSheet.create({
     TextInput: {
          borderWidth: 1,
          width: 300,
          height: 40,
          padding: 10,
     },
})