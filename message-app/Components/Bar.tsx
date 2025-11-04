import { StyleSheet, Image, View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { faker } from '@faker-js/faker/locale/tr';


interface BarProps {
     random: number,
     image: string,
     name: string,
     metin: string
}


const Bar = ({ random, image, name, metin }: BarProps) => {

     const [isZero, SetisZero] = useState(false);

     useEffect(() => {
          if (random === 0) SetisZero(true);
     }, [])


     const date = faker.date.recent({ days: 10 })


     const month = date.toLocaleString('en-US', { month: 'short' });
     const day = date.getDate(); // 31
     const year = date.getFullYear(); // 2025
     const hour = date.getHours().toString().padStart(2, '0');
     const minute = date.getMinutes().toString().padStart(2, '0');
     const formattedDate = `${month} ${day} ${year} ${hour}:${minute}`;

     return (
          <View style={styles.container}>

               <View style={styles.ImageArea}>
                    <View style={styles.ImageCircle}>
                         <Image style={styles.avatar} source={{ uri: image }} />
                    </View>
               </View>


               <View style={styles.TextArea}>
                    <View style={styles.TextAreaTitle}>
                         <Text style={styles.isim}> {name} </Text>
                         <Text style={styles.tarih}> {formattedDate.toString()} </Text>
                    </View>

                    <Text style={styles.Message}>{metin}</Text>
               </View>
               <View style={styles.MesageArea}>

                    {isZero ?

                         <View></View>
                         :
                         <View style={styles.messageNumber}>
                              <Text style={styles.number}>{random}</Text>
                         </View>
                    }


               </View>
          </View>
     )
}

export default Bar

const styles = StyleSheet.create({
     container: {
          width: "100%",
          minHeight: 90,
          flexDirection: "row",
          borderBottomWidth: 1,
          borderBottomColor: "#333"
     },
     ImageArea: {
          flex: 1.5,
          alignItems: "center",
          justifyContent: "center"
     },
     avatar: {
          width: 70,
          height: 70,
          borderRadius: 40

     },
     TextArea: {
          flex: 3.5,
     },
     TextAreaTitle: {
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center"
     },
     MesageArea: {
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
     },

     ImageCircle: {
          width: 75,
          height: 75,
          borderRadius: 42.5,
          backgroundColor: "white",
          alignItems: "center",
          justifyContent: "center",
     },
     isim: {
          fontSize: 15,
          fontWeight: "bold",
          marginTop: 2,
          color: "white"
     },
     tarih: {
          color: "white",
          fontSize: 10,
     },
     Message: {
          fontSize: 13,
          fontWeight: "600",
          marginTop: 5,
          color: "#e0e0e0ff"
     },

     messageNumber: {
          width: 30,
          height: 30,
          backgroundColor: "#3a7baeff",
          borderRadius: 15,
          alignItems: "center",
          justifyContent: "center"
     },

     number: {
          color: "white",
          fontWeight: "800"
     }
})

