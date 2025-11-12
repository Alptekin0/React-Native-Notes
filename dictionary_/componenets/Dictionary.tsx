import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';


const Dictionary = () => {

     const words = useSelector((state: RootState) => state.word);

     const [wordsCount, setwordsCount] = useState(100);
     const [BlockLeft, setBlockLeft] = useState(false);
     const [BlockRight, setBlockRight] = useState(false);
     const wordsLenght = words.words.length;


     useEffect(() => {
          if (wordsCount == 0) {
               setBlockLeft(true);
          }
          else {
               setBlockLeft(false);
          }
          if (wordsCount == wordsLenght - 1) {
               setBlockRight(true);
          }
          else {
               setBlockRight(false);
          }

     }, [wordsCount])

     const goUp = () => {
          setwordsCount(wordsCount + 1)
     }
     const goDown = () => {
          setwordsCount(wordsCount - 1)
     }


     return (
          <View style={styles.dictionary}>
               <Text style={styles.numbers}>{wordsCount} of {wordsLenght - 1}</Text>
               <View style={styles.wordsArea}>
                    <TouchableOpacity>

                         {
                              BlockLeft ? <MaterialIcons name="arrow-back-ios" size={30} color="gray" />
                                   : <MaterialIcons name="arrow-back-ios" size={30} color="black" onPress={goDown} />
                         }

                    </TouchableOpacity>

                    <View style={styles.words}>
                         <Text style={styles.en}> {words.words[wordsCount].en} </Text>
                         <Text style={styles.tr}> {words.words[wordsCount].tr}  </Text>
                    </View>
                    <TouchableOpacity>
                         {
                              BlockRight ? <MaterialIcons name="arrow-forward-ios" size={30} color="gray" />
                                   :

                                   <MaterialIcons name="arrow-forward-ios" size={30} color="black" onPress={goUp} />
                         }
                    </TouchableOpacity>
               </View>
          </View>
     )
}

export default Dictionary

const styles = StyleSheet.create({
     dictionary: {
          width: "100%",
          height: "50%",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          marginTop: 70
     },
     numbers: {
          fontSize: 40,
          fontWeight: 800,
          marginBottom: 20
     },
     wordsArea: {
          width: "90%",
          height: "30%",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "row",
     },

     words: {
          alignItems: "center"
     },
     en: {
          fontSize: 30
     },
     tr: {
          fontSize: 25,
          color: "#bfadadff"
     },
})