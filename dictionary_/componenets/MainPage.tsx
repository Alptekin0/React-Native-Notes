import { StyleSheet, View, StatusBar } from 'react-native'
import React from 'react'
import Dictionary from './Dictionary';
import AddButton from './AddButton';
import Title from './Title';


const MainPage = () => {
    
     return (
          <View style={styles.container}>

               <StatusBar hidden={true} />

               <Title />

               <View style={styles.mainSection}>
                    <Dictionary />
                    <AddButton />
               </View>

          </View>
     )
}

export default MainPage

const styles = StyleSheet.create({
     container: {
          flex: 1
     },
     mainSection: {
          flex: 4,
          justifyContent: "space-between",
          padding: 10
     },
})