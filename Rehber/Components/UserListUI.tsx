import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface UserListUIProps {
     item: string
}

const UserListUI = ({ item }: UserListUIProps) => {
     return (
          <View style={styles.container}>
               <View style={styles.list}>
                    <Text>{item}</Text>
               </View>
          </View>
     )
}

export default UserListUI

const styles = StyleSheet.create({
     container: {
          width: "100%",
          alignItems: "flex-start",
          justifyContent: "flex-start",
     },
     list: {
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          borderBottomWidth: 0.2,
          borderColor: "#dbcdcdff",
          padding: 10,
     }
})