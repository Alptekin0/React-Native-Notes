import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface prop  {
     pressed : () => void;
}

const Button = ({pressed}: prop) => {

     return (

          <Pressable 
               style={styles.button} 
               onPress={pressed} >

               <Text style={styles.text}>EKLE</Text>

          </Pressable>

     )
}

export default Button

const styles = StyleSheet.create({
     button: {
          width: 150,
          height: 50,
          backgroundColor: "#4786a4ff",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
          marginTop: 20
     },
     text: {
          color: "white",
          fontWeight: "600"
     }
})