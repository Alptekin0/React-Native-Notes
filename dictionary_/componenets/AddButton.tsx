import { StyleSheet, TouchableOpacity, Modal, View, Text, Button, Dimensions, TextInput } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import React, { useEffect, useState } from 'react';
import { addWord } from '../slice/WordsSlice';
import { useDispatch } from 'react-redux';


const AddButton = () => {
     const [modalVisible, setModalVisible] = useState(false);
     const [newWord, setNewWord] = useState("");
     const dispatch = useDispatch();


     const handleAddWord = () => {

          if (newWord.trim() !== "") {
               dispatch(addWord(newWord));
               setNewWord("");
          }

     };

     return (
          <View style={styles.container}>
               <Modal
                    visible={modalVisible}
                    animationType="slide"
                    transparent
                    onRequestClose={() => setModalVisible(false)}
               >
                    <View style={styles.overlay}>
                         <View style={styles.modalBox}>
                              <Text style={styles.title}>Kelime Ekleyin</Text>
                              <TextInput style={styles.textInput} onChangeText={(prev) => setNewWord(prev)} value={newWord} />

                              <View style={{ flexDirection: "row", gap: 40 }}>
                                   <Button title="Ekle" onPress={handleAddWord} />
                                   <Button title="Kapat" onPress={() => setModalVisible(false)} />
                              </View>

                         </View>
                    </View>
               </Modal>

               {/* + Butonu */}
               <TouchableOpacity
                    style={styles.addSection}
                    onPress={() => setModalVisible(true)}
               >
                    <AntDesign name="plus" size={28} color="white" />
               </TouchableOpacity>
          </View>
     );
};

export default AddButton;

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
     container: {
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          padding: 20,
     },
     addSection: {
          backgroundColor: '#3c8194',
          width: 70,
          height: 70,
          borderRadius: 35,
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          bottom: 30,
          right: 30,
          elevation: 10,
     },
     overlay: {
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
     },
     modalBox: {
          width: width * 0.8,
          height: height * 0.3,
          backgroundColor: 'white',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          padding: 20,
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 30, // butonun biraz üstünde kalsın
     },
     title: {
          fontSize: 20,
          fontWeight: '700',
          marginBottom: 8,
     },
     textInput: {
          width: "80%",
          margin: 15,
          borderWidth: 1,
     },
});
