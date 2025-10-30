import { StyleSheet, Text, View, Image, Pressable, Modal, Button, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../Slices/store';
import { RemoveTodo } from '../Slices/TodoSlice';
import { EditTodo } from '../Slices/TodoSlice';
import Dialog from "react-native-dialog";


const Todo = () => {

     const [modalVisible, setModalVisible] = useState(false);
     const [editIndex, setEditIndex] = useState<number | null>(null);
     const [editText, setEditText] = useState("");
     const { input } = useSelector((state: RootState) => state.inputReducer);
     const [dialogVisible, setDialogVisible] = useState(false);
     const [deleteIndex, setDeleteIndex] = useState<number | null>(null);

     const todos = useSelector((state: RootState) => state.TodoReducer.todos);
     const dispatch = useDispatch();

     const openDeleteDialog = (index: number) => {
          setDeleteIndex(index);
          setDialogVisible(true);
     };

     const handleDeleteConfirm = () => {
          if (deleteIndex !== null) {
               dispatch(RemoveTodo(deleteIndex));
          }
          setDialogVisible(false);
          setDeleteIndex(null);
     };

     const edit = (index: number) => {
          setEditIndex(index);
          setEditText(todos[index]);
          setModalVisible(true);

     };

     const saveEdit = () => {
          if (editIndex !== null && editText.trim() !== "") {
               dispatch(EditTodo({ index: editIndex, newText: editText }));
               setModalVisible(false);
               setEditIndex(null);
               setEditText("");
          }
     };

     return (
          <View style={styles.container}>
               {[...todos].reverse().map((item: string, reversedIndex: number) => {
                    const index = todos.length - 1 - reversedIndex; // orijinal index

                    return (
                         <View key={index} style={styles.todo}>
                              <View style={styles.text}>
                                   <Text>{item}        {reversedIndex}</Text>
                              </View>

                              <View style={styles.icons}>
                                   <Pressable onPress={() => edit(index)}>
                                        <Image source={require('../images/Pencil.png')} style={styles.iconPencil} />
                                   </Pressable>

                                   <View>
                                        <Pressable onPress={() => openDeleteDialog(index)}>
                                             <Image source={require('../images/trash.png')} style={styles.iconTrash} />
                                        </Pressable>

                                        <Dialog.Container visible={dialogVisible}>
                                             <Dialog.Title>Todo Sil</Dialog.Title>
                                             <Dialog.Description>
                                                  Todo'yu Silmek istediğinize emin misiniz?
                                             </Dialog.Description>
                                             <Dialog.Button label="Vazgeç" onPress={() => setDialogVisible(false)} />
                                             <Dialog.Button label="Sil" onPress={handleDeleteConfirm} />
                                        </Dialog.Container>
                                   </View>
                              </View>
                         </View>
                    )
               })}



               {/* Modal burada container’ın en üstünde yer alıyor */}
               <Modal
                    visible={modalVisible}
                    transparent={true}
                    animationType="slide"
                    onRequestClose={() => setModalVisible(false)}>
                    <View style={styles.modalContainer}>
                         <View style={styles.modalContent}>
                              <Text>Edit Todo</Text>
                              <TextInput
                                   value={editText}
                                   onChangeText={setEditText}
                                   style={styles.input}
                                   placeholder="Todo düzenle"
                              />
                              <View style={styles.modalButtons}>
                                   <Button title="İptal" onPress={() => setModalVisible(false)} />
                                   <Button title="Kaydet" onPress={saveEdit} />
                              </View>
                         </View>
                    </View>
               </Modal>
          </View>
     )

}

export default Todo;

const styles = StyleSheet.create({
     container: {
          width: "100%",
          gap: 10,

     },
     todo: {
          width: "100%",
          height: 60,
          backgroundColor: "white",
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
          padding: 10,
          color: "black"
     },
     text: {
          width: "70%",
     },
     icons: {
          flexDirection: "row",
          gap: 15,
     },
     iconPencil: {
          width: 35,
          height: 35,
     },
     iconTrash: {
          width: 35,
          height: 35,
     },
     modalContainer: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0,0,0,0.5)"
     },
     modalContent: {
          width: "80%",
          backgroundColor: "white",
          borderRadius: 10,
          padding: 20,
          gap: 10
     },
     input: {
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 5,
          padding: 10
     },
     modalButtons: {
          flexDirection: "row",
          justifyContent: "space-between"
     }

})
