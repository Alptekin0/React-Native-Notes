import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React from 'react'

const Loading = () => {
     return (
          <View style={styles.loading}>
               <ActivityIndicator size={'large'} color={'white'} />
               <Text style={styles.loadText}>Loading...</Text> 
          </View>
     )
}

export default Loading

const styles = StyleSheet.create({
     loading: {
          position: 'absolute',
          flex: 1,
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 10,
          zIndex: 100,
          backgroundColor: 'rgba(0, 0, 0, 0.57)',
     },
     loadText: {
          color: 'white',
          fontSize: 16,
          marginTop: 10,
     }
})