import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import React from 'react'

interface buttonProp {
     text: string,
     fonks: () => void;
}

const ButtonComp = ({ text, fonks }: buttonProp) => {
     return (
          <View>
               <TouchableOpacity style={styles.button} onPress={fonks} > <Text style={styles.text}>  {text} </Text>    </TouchableOpacity>

          </View>
     )
}

export default ButtonComp

const styles = StyleSheet.create({
     button: {
          width: 200,
          height: 50,
          backgroundColor: "#415e5eff",
          margin: 20,
          padding: 10,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 15,
     },
     text: {
          color: "white",
          fontWeight: 900
     }
})