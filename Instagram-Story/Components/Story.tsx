import { StyleSheet, Image, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';

interface StoryProps {
     person: string
     name: string
}

const Story = ({ person, name }: StoryProps) => {

     const [clicked, setClicked] = useState(false);

     return (
          <TouchableOpacity onPress={() => setClicked(true)}>

               <LinearGradient colors={clicked ? ['#17eb5dff', '#38f9b9ff'] : ['#e95c43ff', '#ec9d5dff']} style={styles.storyContainer}>

                    <Image source={{ uri: person }} style={styles.image} />

               </LinearGradient>

               <Text style={styles.name}>  {name.length < 12 ? name : name.slice(0, 12) + '...'} </Text>

          </TouchableOpacity>
     )
}

export default Story

const styles = StyleSheet.create({
     storyContainer: {
          width: 90,
          height: 90,
          borderRadius: 45,
          alignItems: "center",
          justifyContent: "center",
          marginLeft: 7.5,
          marginRight: 7.5
     },
     image: {
          width: 85,
          height: 85,
          borderRadius: 42.5,
          backgroundColor: "black",
     },
     name: {
          color: "white",
          alignSelf: "center",
          marginTop: 5,
          marginLeft: 5

     }
})